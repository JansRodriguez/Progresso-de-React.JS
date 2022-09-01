import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //Não pode ter tags irmãs no mesmo ambiente, nesse ambiente do return da função App
    //Para isso precisamos englobar tudo dentro de uma DIV, como abaixo:
    <div>
      <h1>Hello World, React</h1>
      <p>Duas tags irmãs agora.</p>
    </div>
  );
}

export default App;
