import React from 'react';
import ReactDOM from 'react-dom';
//Componente
class Exercicio extends React.Component{
    constructor(props){
        super(props);

        this.state = {texto: this.props.propriedade.textoInicial};
    }

    //Função
    pegarValor = (elemento) =>{
        //Para enviar uma informação para o State, no React, precisamos usar o setState, função. Ai essa função faz um update da informação.
        this.setState({texto: elemento.target.value})
    }
    render(){
        return(
            <section>
                <h1>{this.state.texto}</h1>
                <input type='text' onChange={this.pegarValor} placeholder={this.state.texto}/>
            </section>
        )
    }
}

//Objeto
const objeto = {
    textoInicial: "Digite um valor"
}

//Render
ReactDOM.render(
        <Exercicio propriedade = {objeto}/>, 
    document.getElementById('root')
);