import React from "react";

class ComponenteTres extends React.Component{
    funcaoOnChange(elemento){
        console.log(elemento.target.value);
    }
    render(){
        return <input type="text" onChange={this.funcaoOnChange}/>
    }
}

export default ComponenteTres;
