//Importar o módulo React somente, pois aqui é um componente que será inserido no arquivo JS principal
import React from 'react';

//Criar componente
class Primeiro extends React.Component{
    render(){
        return <h1>O que são props? </h1>
    }
}

export default Primeiro;