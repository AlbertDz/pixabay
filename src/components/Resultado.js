import React, { Component } from 'react'
import Imagen from './Imagen';
import NoResult from './NoResult';
import Paginacion from './Paginacion';
import './Resultado.css';
import { animateScroll as scroll} from 'react-scroll';

class Resultados extends Component {
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        if (imagenes.length === 0 || this.props.error === true) return <NoResult error={this.props.error} buscar={this.props.buscar} />;

        return(
            <React.Fragment>
                    <div className="content-images">
                        { imagenes.map(imagen => ( <Imagen key={imagen.id} imagen={imagen} /> )) }
                    </div>
                    <button onClick={this.onClickUp} type="button" className="btn-scroll">&#8679;</button>
                <Paginacion actual={this.props.actual} paginaAnterior={this.props.paginaAnterior} paginaSiguiente={this.props.paginaSiguiente} />
            </React.Fragment>
        )
    }

    onClickUp = () => {
        scroll.scrollToTop();
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