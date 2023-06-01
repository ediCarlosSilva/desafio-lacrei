import React from 'react'
import { Container } from '../components/styles/Container.styled'
import { Link } from 'react-router-dom'

const Home = () => {

  document.title = `Home | Desafio Lacrei`

  return (
    <Container>
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p className='description'>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className='button-container'>
            <Link className='user-btn' to="/pessoa-usuaria">Pessoa Usuária</Link>
            <Link className='pro-btn' to="/profissional">Profissional</Link>
        </div>
      </div>
      <div>
        <img src="./images/rafiki-2.png" alt="" />
      </div>
    </Container>
  )
}

export default Home
