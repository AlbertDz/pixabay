import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import Burbujas from './components/Burbujas';
import MyLoader from './components/MyLoader';
import './App.css';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
    items: 12,
    buscar: false,
    loading: false,
    error: false
  }

  isResult = false;

  scroll = () => {
    const element = document.querySelector('.box');
    element.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if (pagina === 1) return null;
    pagina--;
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina;
    pagina++;
    this.setState({ pagina }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    this.setState({ loading: true });
    const url = `https://pixabay.com/api/?key=14297579-2ba9cbb60b46f384a2d8532ac&q=${this.state.termino}&per_page=${this.state.items}&page=${this.state.pagina}`;

    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({ imagenes: result.hits, buscar: true, loading: false, error: false }, this.scroll()))
    .catch(error => this.setState({ buscar: true, loading: false, error: true }, this.scroll()))
  }

  datosBusqueda = (termino) => {
    this.isResult = true;
    this.setState({ termino, pagina: 1 }, this.consultarApi);
  }

  loader = () => {
    if (this.state.loading) return <MyLoader />;
  }

  render() {
    let className = 'app container';
    if (this.isResult) className += ' result';

    return (
      <div className={className}>
        <Burbujas />

        <Buscador datosBusqueda={this.datosBusqueda} />

        { this.loader() }

        <Resultado buscar={this.state.buscar} error={this.state.error} termino={this.state.termino} items={this.state.items} imagenes={this.state.imagenes} actual={this.state.pagina} paginaAnterior={this.paginaAnterior} paginaSiguiente={this.paginaSiguiente} />
      </div>
    );
  }
}

export default App;
