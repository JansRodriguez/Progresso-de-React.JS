import React from 'react';
import ReactDOM from 'react-dom';

//Componente
class Componente extends React.Component{
    //Construtor - primeira funcionalidade a ser executada dentro do componente
    constructor(props){
        super(props);

        this.state = {valor: 'Conteúdo'}
    }

    render(){
        return <h1>{this.state.valor}</h1>
    }
}

ReactDOM.render(
    <Componente />, document.getElementById('root')
)