import React from 'react';
import './NoResult.css';

const NoResult = (props) => {
	let texto = 'Oops! No has encontrado resultados.';
	let subtexto = 'Por favor, busca otro término.';
    if (!props.buscar && !props.error) return null;
    if (props.error) {
    	texto = 'Oops! A ocurrido un error al conectar a Pixabay.';
    	subtexto = 'Por favor, vuelva a intentar. Si el problema persiste intente mas tarde.';
    }

    return(
        <div className="content-no-result">
            <h2>{ texto }</h2>
            <p>{ subtexto }</p>
        </div>
    )
}

export default NoResult;