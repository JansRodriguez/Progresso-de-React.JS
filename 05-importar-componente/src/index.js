//Importar React && ReactDOM, pois este é o principal
import React from "react";
import ReactDOM from "react-dom";

//Importar componentes secundários
import ComponenteUm from "./ComponenteUm";
import ComponenteDois from "./ComponenteDois";

//Criar os componentes principal
class Principal extends React.Component{
    render(){
        return(
            <section>
                <ComponenteDois />
                <ComponenteUm />
            </section>
        )
    }
}

ReactDOM.render(
    <Principal />, document.getElementById('root')
)