import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div>
            <img src={ props.icone} />
                <p> {props.titulo} </p>
                <p>{ props.informacao}</p>
            
        </div>
    )
}

export default CardPequeno;
