export default()=>{
    const add = () => {
        let valor = document.querySelector('#valor').innerHTML;
        valor = Number(valor);
        document.querySelector('#valor').innerHTML = valor + 1;
    }
    const diminuir = () => {
        let valor = Number(document.querySelector('#valor').innerHTML);
        document.querySelector('#valor').innerHTML = valor -1;
    }

    return(
        <>
            <p>Contador</p>
            <p id="valor"></p>
            <button onClick={add}>Adicionar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
    )
}