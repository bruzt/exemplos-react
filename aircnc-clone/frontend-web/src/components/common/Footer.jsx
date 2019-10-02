import React from 'react';
import styled from 'styled-components';

export default class Footer extends React.Component {

    render(){
        return (
            <StyledFooter>
                RODAPÉ
            </StyledFooter>
        );
    }
}

const StyledFooter = styled.footer`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    background: grey;
`;