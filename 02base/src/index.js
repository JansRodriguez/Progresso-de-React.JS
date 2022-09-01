//DUAS ETAPAS QUANDO SE CRIA DO ZERO:
    //Uma etapa extra criar uma variavel para receber o corpo do DOCUMENTO
//IMPORTAR MÓDULOS
import React from 'react';
import ReactDOM from 'react-dom';

//ESTRUTURA PARA TRAZER FORMS, IMGS, O DOCUMENTO COMPLETO
const corpoHTML =
<div>
<h1>Meu primeiro RENDER</h1>
    <form>
        <label>Digite seu agora vai em REACT: </label>
        <input></input>
        <br/>
        <label>Onde vou colocar todo esse código quando for um documento muito grande? : </label>
        <input></input>
    </form>
</div>
//'CONEXÃO' do O RENDER - 
ReactDOM.render(
    corpoHTML,
    document.getElementById('root')
);