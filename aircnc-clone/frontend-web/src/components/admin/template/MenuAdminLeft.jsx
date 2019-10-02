import React from 'react';
import styled from 'styled-components';

export default class MenuAdmin extends React.Component {

    render(){ 
        return (
            <StyledNav className='nav'>  
                NAVEGAÇÃO LATERAL
            </StyledNav>
        );
    }
}

const StyledNav = styled.nav`
    display: flex;
    height: 100%;
    justify-content: center;
`;