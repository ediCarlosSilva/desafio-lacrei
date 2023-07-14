import React from 'react'
import { Container } from '../components/styles/Container.styled'

const Profissional = () => {

  document.title = `Profissional | Desafio Lacrei`;

  return (
    <Container>
      <div>
        <h2>Profissional</h2>
        <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
        
      </div>
      <div>
        <img src="./images/profissional-1.png" alt="" />
      </div>
    </Container>
  )
}

export default Profissional
