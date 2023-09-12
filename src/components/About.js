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
            Mergulhei de cabeça nesse universo cativante, aprendendo linguagens de programação e explorando 
            tecnologias modernas e poderosas, como <span className="highlighted-text"> React</span> e
            <span className="highlighted-text"> Node.js</span>.
            À medida que me aprofundava, percebia que a programação
            não era apenas uma habilidade, mas uma verdadeira paixão que me inspirava e motivava a criar
            mais e mais.
          </p>
        ) : (
          <p className="about-text">
            Me formei em <span className="highlighted-text">Desenvolvimento Full-stack</span> na escola de
            programação Trybe e agora iniciei minha formação em
            <span className="highlighted-text">Análise e Desenvolvimento de Sistemas</span> na FAM.
            <br></br>
            <br></br>
            Continuo aprimorando minhas habilidades e me desafiando diariamente através de projetos
            pessoais. Atualmente, minha rotina de estudos, costumo criar projetos pessoais para treinar,
            e acho incrivel o quanto eu consigo aprender melhor quando estou criando algo desafiador 
            e que tenho interesse.
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