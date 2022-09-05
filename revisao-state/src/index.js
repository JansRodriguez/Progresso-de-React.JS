import React from 'react';
import ReactDOM from 'react-dom';

class Estado extends React.Component{
    constructor(props){
        super(props);

        this.state = {nome: "Valor que será inserido"}
    }
    render(){
        return(
            <section>
                <h1>{'Este é o valor do estado: '+this.state.nome}</h1>
                <h1>{'Este é o valor da props que recebe um objeto: '+this.props.propsDois.chave3}</h1>
                <h1>{'Este é o valor da props: '+this.props.propsUm}</h1>
            </section>
        )
    }
}

const objeto = {
    chave1: 'primeiroValor',
    chave2: 'segundovalor2',
    chave3: 'terceirovalor3'
}

ReactDOM.render(
    <Estado
    propsUm = 'primeiroValorDaProps'
    propsDois = {objeto}
    />, 
    document.getElementById('root')
)