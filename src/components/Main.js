import '../styles/Main.css'
import { BsArrowRight } from 'react-icons/bs'

export function Main() {
  return (
    <>
      <div className='all-main'>
        <p className="main">
          <span className='main-effect'>Hello</span>
          , 
          <span className='main-effect'> Eu </span>
          <span className='main-effect'>sou</span>
          <span className='naming'> Rodrigo Neves</span>.
          <br />
          <span className='main-effect'>Desenvolvedor </span>
          <span className='main-effect'>Full-Stack</span>
        </p>
      </div>
      <a href="#sobre" className="btn-mais">
        Veja mais 
        <BsArrowRight style={{ marginLeft: '5px', fontSize: '20px' }} />
      </a>
    </>
  )
}

