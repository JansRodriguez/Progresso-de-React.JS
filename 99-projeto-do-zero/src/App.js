import './App.css';
import SayMyName from './components/SayMyName';
import Pesosa from './components/Pessoa';
import Lista from './components/Lista'

export default () => {
  const name = 'Janes';

  function soma(a, b){
    return a + b;
  }

  const url = 'https://via.placeholder.com/300';
  const nome = 'Login.nome';
  const sobrenome = 'Login.sobrenome';
  return (
    <>
      {/* <h1>Olá, React</h1>
      <h3>Olá, {name}</h3>
      <p>Soma: {soma(1, 4)}</p>
      <img src={url} alt='Minha imagem'/>
      <SayMyName name={nome+ " " +sobrenome} />
      <Pesosa foto='https://via.placeholder.com/150' idade = {34} profissao='Estudante' formacao='Engenheiro'/>
      <Lista home=''/>
      */}
      
    </>
  );
}
