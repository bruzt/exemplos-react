import React from 'react';
import styled from 'styled-components';

export default class MenuAdmin extends React.Component {

    render(){ 
        return (
            <StyledNav className='navbar'> 
                NAVEGAÇÃO TOP
            </StyledNav>
        );
    }
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
`;