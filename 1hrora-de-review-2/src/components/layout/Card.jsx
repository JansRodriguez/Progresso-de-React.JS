import React from "react";
import './Card.css'

//Criar um componente baseado em Função
export default props =>
    <section className="card">
        <main className="principal">
            {props.children}
        </main>
        <footer className="rodape">
            {props.titulo}
        </footer>
    </section>