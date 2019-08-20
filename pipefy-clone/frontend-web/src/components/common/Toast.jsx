import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setToast } from '../../redux/actions/toastActions';

import If from '../common/If';

class Toast extends Component {

    componentDidUpdate(){

        if(this.props.toast.text.trim()){

            window.$('.toast').toast('show')

            setTimeout(() => {
                this.props.setToast({ title: '', text: '', color: ''});
            }, 5000);
        }
    }

    render() {

        return (
            <If test={this.props.toast.text.trim()}>
                <DivAbsolute>
                    <DivToast className="toast" role="alert" data-delay="5000" color={this.props.toast.color} aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="mr-auto">{this.props.toast.title || 'Mensagem'}</strong>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body">
                            <PCenter>{this.props.toast.text}</PCenter>
                        </div>
                    </DivToast>
                </DivAbsolute>
            </If>
        );
    }
}

const DivAbsolute = styled.div`
    position: fixed;
    top: 5px;
    right: 5px;
    z-index: 10;
`;

const DivToast = styled.div`
    min-width: 250px;
    min-height: 125px;
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
