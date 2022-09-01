//IMPORTAR MÓDULOS
import React from 'react';
import ReactDom from 'react-dom';

//Criação de componente
    //Criar componente com a primeira letra maiúscula
        //O componente se torna uma classe
            //A classe precisa herdar as funcionalidades dos componentes, por React.component
class MeuComponente extends React.Component{
    render(){
        return <h1>Meu primeiro componente</h1>
    }
}
ReactDom.render(
    <MeuComponente />, document.getElementById('root')
);