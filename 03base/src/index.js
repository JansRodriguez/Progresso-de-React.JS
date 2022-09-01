import React from "react";
import ReactDOM from "react-dom";

/* 
//SEM JSX
                        //O createElement aceita tres argumentos
                            //a tag, os atributos, o valor;
const elemento = React.createElement('h1', {}, 'Sem JSX');

ReactDOM.render(
    elemento, document.getElementById('root')
); */

//COM JSX
const elemento = <h1>Com JSX</h1>

ReactDOM.render(
    elemento, document.getElementById('root')
);