import React from 'react';
import styled from 'styled-components';

export default class Footer extends React.Component {

    render(){
        return (
            <div className="row">
                <div className="col p-0">

                    <StyledFooter {...this.props}>
                        RODAPÉ
                    </StyledFooter>

                </div>
            </div>
        );
    }
}

const StyledFooter = styled.footer`
    display: flex;
    height: 100px;
    justify-content: center;
    background: grey;
`;