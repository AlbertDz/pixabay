import React from 'react';
import './NoResult.css';

const NoResult = (props) => {
    if (!props.buscar) return null;

    return(
        <div className="content-no-result">
            <h2>Oops! No has encontrado resultados.</h2>
            <p>Por favor, busca otro término.</p>
        </div>
    )
}

export default NoResult;