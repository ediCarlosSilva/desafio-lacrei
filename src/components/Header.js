import React from 'react';
import { StyledHeader, Logo, Nav } from './styles/Header.styled';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
        <Logo href="/">Lacrei</Logo>
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pessoa-usuaria">Pessoa Usuária</NavLink>
            <NavLink to="/profissional">Profissional</NavLink>
        </Nav>
    </StyledHeader>
  )
}

export default Header
