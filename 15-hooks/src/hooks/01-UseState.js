//Importar o módulo do React e o hook UseState;
import { useState } from "react";


//Função
export default () =>{
    /*State é uma variável dinâmica, quando alteramos o valor no state, ele atualiza o componente que está usando esse State. */
    /* //UseState  -[nomeDoState, set(nomeDaFunção)] = useState()*/
    const [texto, setTexto] = useState('Hello World!! (in State)');
    /*O setTexto é similar a função, sendo responsável por enviar dados/arquivos para o state. Função de atribuição de valor.*/

    /*Opcionais:
        //Evento - para quando digitar, podemos alterar dinamicamente o valor do useState*/
        /*Declaração do evento:
            const nomeFuncao (e) Dentro do parentenses tem em si o evento, que é utilizado para indicado que tipo é (mouse/teclado) e que elemento html disparou esse evento, ou seja, como e quando foi disparado.*/
    const evento = (e) =>{
        setTexto(e.target.value);
    } 
    
    /*//Retorno -  (Local para a estrutura HTML - Formulários, botões, tabelas, etc) */
    return(
        <>
        <input type='text' onChange={evento}/>
    
        <p>{texto}</p>
        </>
    )
    /* */
} 

