import React from 'react'
import './Paginacion.css';

const Paginacion = props => {
    let className = 'btn';
    let btn = <button onClick={props.paginaAnterior} type="button" className={className}>&larr; Anterior</button>;
    if (props.actual === 1) {
        className += ' disabled';
        btn = <span className={className}>&larr; Anterior</span>;
    };

    return(
        <div className="buttons">
            {btn}
            <button onClick={props.paginaSiguiente} type="button" className="btn">Siguiente &rarr;</button>
        </div>
    );
}

export default Paginacion;