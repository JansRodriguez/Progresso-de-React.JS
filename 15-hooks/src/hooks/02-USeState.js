import {useState} from 'react';

export default () =>{
    const [texto, setTexto] = useState('Atualizando');
    const [idade, setIdade] = useState(0);

    //Função com configuração de constante para evento
    const eventoTexto = (e) =>{
        setTexto(e.target.value);
    }
    


    //Retorno
    return(
        <>
            <input type='text' placeholder='nome' onChange={eventoTexto}/> 
            <input type='number' placeholder='numero' onChange={e => setIdade(e.target.value)}/>
            <p>{texto}</p>
            <p>{idade}</p>
        </>
    )
}