import React from "react";

export default props =>
    <>
        <h1>{props.titulo}</h1>
        <p>{props.subtitulo}</p>
        <p>{2*4}</p>
        <h5>Esses valores acima, não estão dentro do componente, mas sim no index.js como valores no parametros.</h5>
    </>