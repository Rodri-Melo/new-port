import React, { useEffect, useState } from "react";
import '../styles/Header.css'

export function Header() {
  const [show, setShow] = React.useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <header className={`header ${show && "header-scroll"}`}>
      <p className="name-header">Rodrigo</p>
      <a
        href="#sobre"
        className={`btn-header ${activeButton === "sobre" && "active"}`}
        onClick={() => handleButtonClick("sobre")}
      >
        Sobre
      </a>
      <a
        href="#skills"
        className={`btn-header ${activeButton === "skills" && "active"}`}
        onClick={() => handleButtonClick("skills")}
      >
        Habilidades
      </a>
      <a
        href="#project"
        className={`btn-header ${activeButton === "projects" && "active"}`}
        onClick={() => handleButtonClick("projects")}
      >
        Projetos
      </a>
      <a
        href="#contact"
        className={`btn-header ${activeButton === "contact" && "active"}`}
        onClick={() => handleButtonClick("contact")}
      >
        Contato
      </a>
    </header>
  );
}
