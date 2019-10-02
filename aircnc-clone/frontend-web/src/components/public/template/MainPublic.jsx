import React from 'react';
import styled from 'styled-components';

export default class MainPublic extends React.Component {

    render(){
        return (
            <StyledMain id='main-public'>
                CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO<br />CONTEÚDO
            </StyledMain>
        );
    }
}

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
`;