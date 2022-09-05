import React from 'react';
import ReactDOM from 'react-dom';   

class Evento extends React.Component{
    
    //Função para gerar o evento
        //Não se utiliza o nome 'function'
    clique(valor){
        alert("Olá," + valor);
        console.log(this);
    }
    //O BIND é uma maneira de trabalhar com parametros nas funções.
    
    render(){
        return <button onClick={this.clique.bind(this, ' Janes em Bind!!!')}>CLIQUE AQUI</button>
    }
}

ReactDOM.render(
    <Evento/>, document.getElementById('root')
)