import React from 'react'
import { Container } from '../components/styles/Container.styled'

const Home = () => {
  return (
    <Container>
      <div>
        <h2>Boas vindas a Lacrei Saúde</h2>
        <p className='description'>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <div className='button-container'>
            <a className='user-btn' href="/pessoa-usuaria">Pessoa Usuária</a>
            <a className='pro-btn' href="/profissional">Profissional</a>
        </div>
      </div>
      <div>
        <img src="./images/rafiki-2.png" alt="" />
      </div>
    </Container>
  )
}

export default Home
