import React from "react";
import Card from './components/layout/Card.jsx';
import Primeiro from './components/Primeiro';
import './App.css';
import Segundo from "./components/Segundo.jsx";

export default (props) =>(
    <div className="App">
    <Card titulo='Primeiro Componente'>
        <Primeiro/>
    </Card>
    <Card titulo='Com Parametro'><Segundo titulo='Testando títulos' subtitulo='Testando subtitulo'/></Card>
    <Card titulo='Componentes Com Filhos'>
        <ul><li>Primeiro Filho</li><li>Segundo Filho</li><li>Terceiro Filho</li></ul>
    </Card>
    <Card titulo='Este é meu título do rodapé'>Conteúdo - Tudo que é passado dentro da tag, texto ou outras tags é 'filhos (children)'
    </Card>
    </div>
)