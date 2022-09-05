import React from 'react';
import ReactDOM from 'react-dom';

/* class ArrowFunction extends React.Component{
    testeArrowFunction = () =>{
        alert("Testando uma arrow_function... Ooooh, sintaxe chata");
    }
    render(){
        return <button onClick={this.testeArrowFunction}> CLIQUE AQUI </button>
    }
}

ReactDOM.render(
    <ArrowFunction/>, document.getElementById('root')
) */

class ArrowFunction extends React.Component{
    nomeDaFuncao = (curso) =>{
        alert("O curso é: "+curso);
        console.log(this);
    }

    render(){
        return <button onClick={()=> this.nomeDaFuncao('ArrowFunction sem Bind')}>CLIQUE AQUI</button>
    }
}

ReactDOM.render(
    <ArrowFunction/>, document.getElementById('root')
);