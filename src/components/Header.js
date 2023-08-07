import '../styles/Header.css'

export function Header() {
  return (
    <div className='header'>
      <p className="name-header">R.Neves</p>
      <a href="#sobre" className="btn-header">Sobre</a>
      <a href="#skills" className="btn-header">Skills</a>
      <a href="#projects" className="btn-header">Projetos</a>
      <a href="#contact" className="btn-header">Contato</a>
    </div>
  );
}