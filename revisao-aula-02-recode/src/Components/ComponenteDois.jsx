import { useState } from "react";

export default ()=>{
    //useState - Variável Dinâmica, que sofre alteração
    //[valorInicialDoEstado, funçãoQueAlteraOValorInicialDoEstado] = useState(ValorInicial);
    const [valor, setValor] = useState(0);

    //AREAS DE FUNÇÕES
    const add =()=>{
        setValor(valor+1);
    }

    const sub =()=>{
        setValor(valor-1);
    }

    const zerar =()=>{
        setValor(0);
    }

    return(
        <>
            <h1>Contador</h1>
            <p>{valor}</p>
            <button onClick={add}>Aumentar</button>
            <button onClick={sub}>Diminuir</button>
            <button onClick={zerar}>Zerar</button>
        </>
    )
}

