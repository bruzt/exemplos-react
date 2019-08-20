import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setToast } from '../../redux/actions/toastActions';

class Toast extends Component {

    componentDidUpdate(){

        window.$('.toast').toast('show')
    }

    renderToasts(){

        return this.props.toast.messages.map( (toast, index) => {

            let color = null;
        
            switch(toast.color){
    
                case 'success':
                case 'green':
                    color = '#90EE90';
                break;
    
                case 'warning':
                case 'yellow':
                    color = '#ede858';
                break;
    
                case 'danger':
                case 'red':
                    color = '#FF6347';
                break;
    
                default:
                    color = toast.color;
            }

            return (
                <DivToast key={index} className="toast" role="alert" data-delay="5000" aria-live="assertive" aria-atomic="true">
                    <DivToastHeader className="toast-header" color={color}>
                        <strong className="mr-auto">{toast.title || 'Mensagem'}</strong>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </DivToastHeader>
                    <div className="toast-body">
                        <PCenter>{toast.text}</PCenter>
                    </div>
                </DivToast>
            );
        });
    }

    render() {

        return (
            <DivAbsolute>
                
                {this.renderToasts()}

            </DivAbsolute>
        );
    }
}

const DivAbsolute = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
`;

const DivToast = styled.div`
    min-width: 250px;
    min-height: 125px;
`;

const DivToastHeader = styled.div`
    background-color: ${(props) => props.color};
`;

const PCenter = styled.p`
    text-align: center;
    margin-top: 10px;
`;

/////////////////////////////////////

const mapStateToProps = (state) => ({ toast: state.toast });

const mapDispatchToProps = (dispatch) => bindActionCreators({ setToast }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
