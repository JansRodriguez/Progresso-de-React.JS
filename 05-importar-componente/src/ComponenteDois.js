//Como aqui é um componente que será incorporado ao index, necessário importar somente o react
import React from "react";

//Criar o primeiro componente, que é uma classe, fazendo ele herdar as caracteristicas do componente.
class ComponenteDois extends React.Component{
    render(){
        return <h1>Segundo Componente Criado</h1>
    }
}

export default ComponenteDois;