import React from "react";
import ReactDOM from "react-dom";

import ComponenteUm from "./componenteUm";
import ComponenteDois from "./componenteDois";
import ComponenteTres from './componenteTres';

ReactDOM.render(
    <section>
        <ComponenteUm/>
        <br/>
        <ComponenteDois/>
        <br/>
        <ComponenteTres/>
    </section>, document.getElementById('root')
)