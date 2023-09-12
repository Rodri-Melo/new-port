import '../styles/Project.css'

export function Project() {
  return (
    <>
      <div className='all-project'>
        <h2 className='project-title'> Projetos </h2>
        <div className="project">
          <img
            className="project-image"
            src="https://i.imgur.com/eBIiUWw.png"
            alt="imagem da tela de seleção de personagens"
          />
          <p className='project-name'> Magic World </p>
          <p className='project-description'> RPG de batalhas em turnos </p>
          <div className='btn-div'>
            <a className='btn-github'
              href="https://github.com/Rodri-Melo/my-rpg"
              target="_blank"
              rel="noopener noreferrer">Github</a>
            <a className='btn-github'
              href="https://my-rpg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">Link</a>
          </div>
        </div>
        <div className="project">
          <img
            className="project-image"
            src="https://i.imgur.com/7kdpjMS.png"
            alt="Home do Taskhub"
          />
          <p className='project-name'> Taskhub </p>
          <p className='project-description'> Gerenciador de Tarefas </p>
          <div className='btn-div'>
            <a className='btn-github'
              href="https://github.com/Rodri-Melo/TaskHub"
              target="_blank"
              rel="noopener noreferrer">Github</a>
            <a className='btn-github'
              href="https://task-hub-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">Link</a>
          </div>
        </div>
        <div className="project">
          <img
            className="project-image"
            src="https://i.imgur.com/kbIQeg4.png"
            alt="Tabela de classificação de times"
          />
          <p className='project-name'> Trybe Futebol Clube </p>
          <p className='project-description'> Tabela de classificação de times </p>
          <div className='btn-div'>
            <a className='btn-github'
              href="https://github.com/Rodri-Melo/Trybe-futebol-clube"
              target="_blank"
              rel="noopener noreferrer">Github</a>
          </div>
        </div>
        <div className="project">
          <img
            className="project-image1"
            src="https://i.imgur.com/Al5eTLG.png"
            alt="Home do Catalogo de Games"
          />
          <p className='project-name'>PlayhubGames</p>
          <p className='project-description'> Catalogo de Games com filtro e responsividade </p>
          <div className='btn-div'>
            <a className='btn-github'
              href="https://github.com/Rodri-Melo/PlayhubGames"
              target="_blank"
              rel="noopener noreferrer">Github</a>
            <a className='btn-github'
              href="https://playhub-games.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">Link</a>
          </div>
        </div>
        <div className="project">
          <img
            className="project-image1"
            src="https://i.imgur.com/5C7YCeU.png"
            alt="imagem da tela de seleção de personagens"
          />
          <p className='project-name'> Carshop </p>
          <p className='project-description'> API com crud em Typescript, POO e arquitetura MSC </p>
          <div className='btn-div'>
            <a className='btn-github'
              href="https://github.com/Rodri-Melo/carshop"
              target="_blank"
              rel="noopener noreferrer">Github</a>
          </div>
        </div>
        <div className="project">
          <img
            className="project-image"
            src="https://i.imgur.com/VrMqBWY.png"
            alt="Home do Netflix"
          />
          <p className='project-name'> Netflix </p>
          <p className='project-description'> Clone do Netflix em React </p>
          <div className='btn-div'>
            <a className='btn-github'
              href="https://github.com/Rodri-Melo/Netflix-Clone"
              target="_blank"
              rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </div>
    </>
  )
}