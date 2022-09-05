import React from "react";

class ComponenteDois extends React.Component{
    clique = (valor) =>{
        alert('Evento com: ' + valor);
    }
    render(){
        return <button onClick={()=> this.clique('Arrow Function, sem Bind')}>CLIQUE AQUI</button>
    }
}

export default ComponenteDois;