import './App.css'
import Card from './components/Card'

function App() {

  let nome = 'Rafael Zampieron';
  let idade = 37;
  let fotoPerfil = 'https://github.com/rafazamp.png';
  let socialGitHub = 'https://github.com/rafazamp';
  let socialLinkedin = 'https://www.linkedin.com/in/rafaelzampieron';



  return (
    <div className="App">
      <Card
        nome={nome}
        idade={idade}
        fotoPerfil={fotoPerfil}
        socialGitHub={socialGitHub}
        socialLinkedin={socialLinkedin}
      />
    </div>
  );
}

export default App
