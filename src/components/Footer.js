import React from 'react'
import { StyledFooter } from './styles/Footer.styled'
import SocialIcons from './SocialIcons'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (
    <StyledFooter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pessoa-usuaria">Pessoa Usuária</NavLink>
          <NavLink to="/profissional">Profissional</NavLink>
        </nav>
        <SocialIcons />
        <p>Teste Front-end Lacrei - Edi Carlos</p>
    </StyledFooter>
  )
}

export default Footer
