import '../styles/Contact.css'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'
import { BsWhatsapp } from 'react-icons/bs'

export function Contact() {

  const whats = 'https://api.whatsapp.com/send?phone=5511992357342'
  return (
    <>
      <div className='all-contact'>
        <div className="contact">
          <div className='text-contact-div'>
            <h2 className='title'>Vamos conversar</h2>
            <span className='text-contact'>
              Estou disponivel para tirar quaisquer duvidas que você tiver, por favor entre em
              contato comigo.
            </span>
            <br></br>
            <span className='text-contact2'>
              Seja para um projeto ou apenas para conversar responderei o mais breve possivel!
            </span>
          </div>
        </div>
        <div className='social'>
          <h2 className='social-title'> Minhas Redes</h2>
          <a className='icon-link' href="https://github.com/Rodri-Melo" target="_blank" rel="noopener noreferrer">
            <RxGithubLogo size={50} style={{ marginBottom: '25px' }} />
          </a>

          <a className='icon-link' href="https://www.linkedin.com/in/rodrineves/" target="_blank" rel="noopener noreferrer">
            <RxLinkedinLogo size={50} style={{ marginBottom: '25px' }} />
          </a>

          <a className='icon-link' href={whats} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={50} style={{ marginBottom: '25px' }} />
          </a>

        </div>
      </div>
    </>
  )
}