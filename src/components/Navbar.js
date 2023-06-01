import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styles/Header.styled';

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/pessoa-usuaria">Pessoa Usuária</Link>
      <Link to="/profissional">Profissional</Link>
    </Nav>
  )
}

export default Navbar
