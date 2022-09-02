//Importar o módulo React somente, pois aqui é um componente que será inserido no arquivo JS principal
import React from 'react';
import ReactDom from 'react-dom';
//Importando Componentes
import Primeiro from './ComponenteUm';
import Segundo from './ComponenteDois';
import Terceiro from './ComponenteTres';
import Quarto from './ComponenteQuatro'

//Criar componentes principais
class Principal extends React.Component{
    render(){
        return(
            <section>
                <Primeiro />
                <Segundo />
                <Terceiro />
                <Quarto />
                <h1>Então temos: {this.props.estado}</h1>
                <h1>Então temos: {this.props.objeto.valor}</h1>
                <h2>{this.props.objeto.conteudo}</h2>
                <h2>{this.props.objeto.detalhe}</h2>
                <hr/>
            </section>
        )
    }
}
//JSON
const objeto = {
    valor: "Segunda Props",
    conteudo: "Usando um objeto",
    detalhe: "Usando expressão para armarzenar esse objeto e exibir no componente principal"
}

//Render
ReactDom.render(
  <Principal estado ='Minha primeira props' objeto={objeto}/>, document.getElementById('root')  
);


/* class Componente extends React.Component{
    render(){
        return (<div>
            <h1>Temos uma props em execução: {this.props.elemento.valor1}</h1>
            <h1>Temos uma props em execução: {this.props.elemento.valor2}</h1>
        </div>)
    }
}
//Objeto JSON
const propriedade = {
    valor1: "Props em execução",
    valor2: "Confirmado do objeto JSON em execução pela pros"
}
//Render
ReactDom.render(
    <Componente elemento = {propriedade}/>, document.getElementById('root')
) */