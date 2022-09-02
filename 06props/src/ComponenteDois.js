//Importar o módulo React somente, pois aqui é um componente que será inserido no arquivo JS principal
import React from 'react';

//Criar o segundo componente
class Segundo extends React.Component{
    render(){
        return <h1>Props ou propriedades, são caracteristicas que um componente pode ter acesso.</h1>
    }
}

export default Segundo;