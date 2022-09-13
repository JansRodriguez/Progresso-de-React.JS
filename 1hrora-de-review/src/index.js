import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro from './components/01Primeiro';
import Segundo from './components/02Segundo';
import Terceiro from './components/03Terceiro';
import Quarto from './components/04ComParametros';
import Quinto from './components/05ComFilhos'
import './index.css';

ReactDOM.render(
    <>
        <h1>Ready Code</h1>
        <Primeiro></Primeiro>
        <Segundo></Segundo>
        <Terceiro></Terceiro>
        <Quarto titulo = 'Textando títulos' subtitulo = 'Textando subtítulos, pode ser scrpit ou funções.' soma=''/>
        <Quarto titulo='Pode-se criar mais de um componente do mesmo tipo' subtitulo='Somente alterar os valores.'/>
        <Quinto>
             <ul>
                <li>Testando os children</li>
                <li>Alimentando a mente com Children</li>
             </ul>
        </Quinto>

    </>
    ,
    document.getElementById('root')
)