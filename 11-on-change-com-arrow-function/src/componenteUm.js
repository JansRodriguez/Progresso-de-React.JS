import React from 'react';

class ComponenteUm extends React.Component{
    clique(valor){
        alert('Olá, com: '+valor);
    }
    render(){
        return <button onClick={this.clique.bind(this, 'Bind')}>Clique Aqui</button>
    }
}

export default ComponenteUm;