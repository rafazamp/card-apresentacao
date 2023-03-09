import './Card.css'
import linkedinLogo from '../assets/linkedin.svg'
import githubLogo from '../assets/github.svg'

function Card(usuario) {
  return (
    <div className='main'>
      <h1>{usuario.nome}</h1>
      <h2>{usuario.idade} anos</h2>
      <img id="fotoPerfil" src={usuario.fotoPerfil} alt={usuario.nome} title={usuario.nome} />
      <br/>
      <a href={usuario.socialGitHub} target="_blank">
        <img src={githubLogo} width={100} />
      </a>
      <a href={usuario.socialLinkedin} target="_blank">
        <img src={linkedinLogo} width={100} />
      </a>
    </div>
  );
};

export default Card;