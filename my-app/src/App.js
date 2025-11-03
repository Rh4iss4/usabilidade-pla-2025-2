import './App.css';
import home from './components/home.js';

function App() {
    const title = "Bem Vindo ao projetode react-bootstrap"
  const link = [

    {label: 'Cards', href: 'cards.html'},
    {label: 'Botões', href: 'botoes.html'},
    {label: 'Formulário', href: 'formulario.html'},
    {label: 'Navbar', href: 'navbar.html'},
    {label: 'Layout', href: 'layout.html'},
  ]
  return (
    <div>
      <home title={title} links={link}/>
    </div>
  );
}

export default App;
