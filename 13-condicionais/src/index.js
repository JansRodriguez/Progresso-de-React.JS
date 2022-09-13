import React from 'react';
import ReactDOM from 'react-dom';

class Componente extends React.Component{
    constructor(props){
        super(props);

        this.state = {exibir : false}
    }

    alterarState = () =>{
        let converter = !this.state.exibir;
        this.setState({exibir : converter});
    }

    render(){
        let texto = '';
        if(this.state.exibir == true){
            texto = 'Olá!!! Trabalhando com condicionais'
        }
        return(
            <section>
                <h1>{texto}</h1>
                <button onClick={this.alterarState}>CLIQUE AQUI</button>
            </section>
        )
    }

}

ReactDOM.render(
    <Componente />,
    document.getElementById('root')
);