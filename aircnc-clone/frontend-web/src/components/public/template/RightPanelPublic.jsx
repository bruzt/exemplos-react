import React from 'react';
import styled from 'styled-components';

export default class LeftPanelPublic extends React.Component {

    render(){
        return (
            <StyledDiv id='LeftPanelPublic'>
                PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br /> PAINEL DIREITO <br />
            </StyledDiv>
        );
    }
}

const StyledDiv = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
`;