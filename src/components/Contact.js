import '../styles/Contact.css'
import React, { useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

export function Contact() {

  const whats = 'https://api.whatsapp.com/send?phone=5511992357342'

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <>
      <h2 className='all-contact'> Contato </h2>
      <div className='contact'>
        <div className='info-contact'>
          <div className='info-container'>
            <BsTelephone className='icon-link' size={50} style={{ marginBottom: '25px' }} />
            <div className='info-text'>
              <div className='info-title'>Telefone</div>
              <div className='info-link'>+55 (11) 9 9235-7342</div>
            </div>
          </div>

          <div className='info-container'>
            <MdOutlineMailOutline className='icon-link' size={50} style={{ marginBottom: '25px' }} />
            <div className='info-text'>
              <div className='info-title'>E-Mail</div>
              <div className='info-link'>rnevesdemello@gmail.com</div>
            </div>
          </div>

          <div className='info-container'>
            <HiOutlineLocationMarker className='icon-link' size={50} style={{ marginBottom: '25px' }} />
            <div className='info-text'>
              <div className='info-title'>Local</div>
              <div className='info-link'>São Paulo/SP</div>
            </div>
          </div>
        </div>

        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='nome'></label>
              <input
                className='form-area'
                type='text'
                id='nome'
                name='nome'
                placeholder='Nome'
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'></label>
              <input
                className='form-area'
                type='email'
                id='email'
                name='email'
                placeholder='E-mail'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='mensagem'></label>
              <textarea
                className='form-text-area'
                id='mensagem'
                name='mensagem'
                placeholder='Mensagem'
                rows='4'
                cols='50'
                required
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>

            <button className='btn-contact' type='submit'>
              Enviar
            </button>
          </form>
        </div>

      </div>
    </>
  )
}