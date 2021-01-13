import React, { Component } from 'react'
import Imagen from './Imagen';
import Paginacion from './Paginacion';
import './Resultado.css';

class Resultados extends Component {
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if (imagenes.length === 0) return null;

        return(
            <React.Fragment>
                <div className="content-images">
                    { imagenes.map(imagen => (
                        <Imagen key={imagen.id} imagen={imagen} />
                    )) }
                </div>
                <Paginacion actual={this.props.actual} paginaAnterior={this.props.paginaAnterior} paginaSiguiente={this.props.paginaSiguiente} />
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
                { this.mostrarImagenes() }
            </React.Fragment>
        )
    }
}

export default Resultados;