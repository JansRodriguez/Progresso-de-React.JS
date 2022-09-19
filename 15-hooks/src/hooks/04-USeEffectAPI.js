import React, {useEffect, useState} from "react";
import '../css/index.css';

export default () =>{
    //UseState
    //Como irei criar um vetor, estarei trabalhando com o '[]' dentro do argumentos do useState;
    const [vetor, setVetor] = useState([]);
    const [status, setStatus] = useState('Carregando...');

    //Função para obter dadas da API
    //O ASYNC é uma indicação de funcao assicrono, pois como a api pode levar um tempo para carregar, teremos atraves do ASYNC a indicação.
    const obterDados = async () =>{
        //A função FETCH faz a requisição
        const dados = await fetch('https://jsonplaceholder.typicode.com/photos');
        //Fetch traz o json em formato de string e precisamos converter para json com o método json()
        const converter = await dados.json();
        setVetor(converter);
        setStatus('Dados carregados com sucessos!')
    }

    //UseEffect
    useEffect(()=>{
        obterDados();
    })

    return(
        <>
            <h1>{status}</h1>
            <ul>
                {vetor.map(elemento =>(<li>{elemento.title}</li>))} 
            </ul>
        </>
    )
}