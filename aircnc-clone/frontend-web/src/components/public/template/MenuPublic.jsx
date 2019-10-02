import React from 'react';
import styled from 'styled-components';

export default class MenuPublic extends React.Component {

    render(){
        return (
            <StyledNav className='navbar' id='menu-public'>
                NAVEGAÇÃO
            </StyledNav>
        );
    }
}

const StyledNav = styled.nav`
    display: flex;
    height: 50px;
    justify-content: center;
`;