import { useState } from 'react'
import '../styles/About.css'

export function About() {
  const [showAbout, setShowAbout] = useState(true);

  const toggleSection = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className='all-about'>
      <div className='about-title'>
        <h2 onClick={toggleSection} className={showAbout ? 'active' : ''}>Sobre mim</h2>
        <h2 onClick={toggleSection} className={!showAbout ? 'active' : ''}>Formação</h2>
      </div>
      <div className="about">
        {showAbout ? (
          <p className="about-text">
            Olá, eu sou <span className="highlighted-text">Rodrigo Neves</span>, e sou um verdadeiro
            apaixonado por tecnologia!
            <br></br>
            <br></br>
            Desde cedo fui atraído pelo fascinante mundo dos computadores e da tecnologia, sempre fui
            curioso para entender como tudo funcionava e como era criado,
            hoje desenvolvendo meus próprios projetos eu sinto que encontrei o que realmente quero fazer.
            <br></br>
            <br></br>
            Mergulhei de cabeça nesse universo cativante, aprendendo linguagens de programação e
            explorando
            frameworks modernos, como o <span className="highlighted-text">React</span> e o
            <span className="highlighted-text">Node.js</span>.
            A medida que me aprofundava, percebia que a programação
            não era apenas uma habilidade, mas uma verdadeira paixão que me inspirava e motivava a criar
            mais e mais.
            <br></br>
            <br></br>
            Quando não estou codificando, você pode me encontrar jogando alguma coisa, conversando com
            amigos ou assistindo futebol.
          </p>
        ) : (
          <p className="about-text">
            Me formei em <span className="highlighted-text">Desenvolvimento Full-stack</span> na escola de
            programação Trybe e agora iniciei minha formação em
            <span className="highlighted-text">Análise e Desenvolvimento de Sistemas</span> na FAM.
            <br></br>
            <br></br>
            Continuo aprimorando minhas habilidades e me desafiando diariamente através de projetos
            pessoais. Atualmente, estou criando de um jogo de RPG com batalhas em turnos, projeto esse que
            é um reflexo da minha empolgação com o mundo dos jogos, é bem desafiador criar tudo do zero e
            isso tem despertado minha imaginação e criatividade além de me ajudar a crescer em cada etapa
            do projeto.
            <br></br>
            <br></br>
            Também estou aprendendo Java para expandir minha compreensão sobre desenvolvimento de software
            e me tornar um desenvolvedor mais versátil, uma vez que é uma linguagem amplamente utilizada
            em diversos setores da indústria de tecnologia
            <br></br>
            <br></br>
            Acredito que o aprendizado contínuo é essencial para acompanhar as tendências
            do mercado e me manter atualizado com as tecnologias emergentes.
          </p>
        )}
      </div>
    </div>
  );
}