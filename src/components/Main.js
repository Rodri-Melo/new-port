import '../styles/Main.css'
import { BsArrowRight } from 'react-icons/bs'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'
import { BsWhatsapp } from 'react-icons/bs'

const whats = 'https://api.whatsapp.com/send?phone=5511992357342'

export function Main() {
  return (
    <>
      <div className='all-main'>
        <div className='icons-main'>
          <a className='icons-link' href="https://github.com/Rodri-Melo" target="_blank" rel="noopener noreferrer">
            <RxGithubLogo size={30} style={{ marginBottom: '25px' }} />
          </a>
          <a className='icons-link' href="https://www.linkedin.com/in/rodrineves/" target="_blank" rel="noopener noreferrer">
            <RxLinkedinLogo size={30} style={{ marginBottom: '25px' }} />
          </a>
          <a className='icons-link' href={whats} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={30} style={{ marginBottom: '25px' }} />
          </a>
        </div>
        <div className="main">
          <span className='main-title'>Bem-vindo ao meu portfólio, <br></br> sou o Rodrigo.</span>
          <br />
          <span className='main-text'>Tenho formação como Desenvolvedor Full-Stack e atualmente sou
            estudante de Análise e Desenvolvimento de Sistemas.
          </span>
        </div>
        <div className='main-imgs'>
          <img className='main-img'
            src='https://i.imgur.com/kqeojmv.jpg'
            alt='main-img'
          />
        </div>
      </div>
      <a href="#sobre" className="btn-mais">
        Veja mais
        <BsArrowRight style={{ marginLeft: '5px', fontSize: '20px' }} />
      </a>
    </>
  )
}

