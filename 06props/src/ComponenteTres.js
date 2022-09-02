//Importar o módulo React somente, pois aqui é um componente que será inserido no arquivo JS principal
import React from 'react';

//Criar o componente, que é uma classe na verdade, mas herda as funcionalidades de componente.
class Terceiro extends React.Component{
    render(){
        return <h1>Um props pode ser enviado para um componente como: variável, constante ou função.</h1>
    }
}

export default Terceiro;