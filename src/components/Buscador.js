import React, { Component } from 'react';
import './Buscador.css';

class Buscador extends Component {

    busquedaRef = React.createRef();
    isHeader = false;

    obtenerDatos = (e) => {
        e.preventDefault();
        this.props.datosBusqueda(this.busquedaRef.current.value);
        this.isHeader = true;
    }

    render() {
        let className = 'box';
        if (this.isHeader) className += ' box-header';

        return (
            <div className={className}>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>

                <div className="container">
                    <div className="form">
                        <h2>PIXABAY Imagenes</h2>
                        <form onSubmit={this.obtenerDatos}>
                            <div className="inputBox">
                                <input ref={this.busquedaRef} type="text" placeholder="Busca tu Imagen. Ejemplo: Futbol" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Buscar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buscador;