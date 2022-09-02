import React from 'react';
import ReactDOM from 'react-dom';

//Componente para Criação dos Eventos

class Eventos extends React.Component{

    //Função para Ação do Evento   
        //As funções em React não tem o nome function
    mensagem(){
        alert("Usando Eventos do Mouse/Teclado em React");
        document.write("Evento realizado")
    }
    render(){
        return <button onClick={this.mensagem}>CLIQUE EM MIM</button>
    }
}

ReactDOM.render(
    <Eventos/>, document.getElementById('root')
)