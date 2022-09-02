//Importar o módulo React somente, pois aqui é um componente que será inserido no arquivo JS principal
import React from 'react'

//Criar componente
class Quarto extends React.Component{
    render(){
        return (
        <section>
            <h1>Em Render, no componente, se cria as props e no componente principal, por meio das espressões, chaves, faz as chamadas das props. Ou atraves de variaveis que serão recebias em render. Para ter acesso as props, se usam o comando this.props.nomeDaProps</h1>
            <hr/>
        </section>
        )
    }
}

export default Quarto;