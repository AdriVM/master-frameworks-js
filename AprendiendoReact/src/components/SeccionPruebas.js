import React from 'react';
import MiComponente from './MiComponente';
import Slider from './Slider';
import Sidebar from './Sidebar';

class SeccionPruebas extends React.Component {

  //Ejemplo del estado (state)
  //contador = 0;

  //Si no hacemos el state, los elementos de la vista no cambian como en angular
  /*
    FORMA LARGA
  
    constructor(props){
      super(props);
      this.state = {
          contador: 0
      }
    }
  */

  //FORMA CORTA
  state = {
    contador: 0
  }

  /**
   * NOTA
   * Si definimos las funciones como funciones de flecha, no hace falta pasar el .bind(this)
   */
  sumar = (e) => {
    /* Esto no funciona, hay que hacer setState 
        //this.contador++;
        this.contador =  this.contador += 1;
    */
    this.setState({
      contador: (this.state.contador + 1)
    });

  }

  restar() {
    /* Esto no funciona, hay que hacer setState 
        //this.contador--;
        this.contador =  this.contador -= 1;
    */
    this.setState({
      contador: (this.state.contador - 1)
    });


  }

  //=============================================
  //var HolaMundo = () => {}
  HolaMundo(nombre, edad) {
    var texto = (
      <div>
        <h4>Hola {nombre}</h4>
        <p>{nombre} tiene {edad} años</p>
      </div>
    )
    return texto;
  }

  render() {
    var nombre = "Adrián";
    var presentacion = <h2>Hola, soy {nombre} y estoy aprendiendo React</h2>
    return (
      <>
        <Slider
          title="Pruebas"
          size="slider-small"
        />
        <div className="center">
          <section id="content">

            <h2 className="sub-header">Últimos Artículos</h2>

            <h3 className="sub-header">Llamada Variables en React</h3>
            { /* Dentro de las llaves, se ejecuta js (fijate en presentacion) y nunca se pone ;*/}
            {presentacion}
            <p>
              Editar <code>src/App.js</code> y guardar para reiniciar.
                </p>

            <h3 className="sub-header">Funciones y JSX Básico</h3>
            {this.HolaMundo(nombre, 28)}
            {console.log('¡Hola Mundo desde React!')}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprende React
                </a>

            <h3 className="sub-header">Componentes</h3>
            <section className="componentes">
              <MiComponente />
            </section>

            <h3 className="sub-header">Estado</h3>
            <p>
              Contador: {this.state.contador}
            </p>
            <p>
              { /*Funcion de flecha (NO HAY QUE PASAR EL BIND)*/}
              <input type="button" value="Sumar" onClick={this.sumar} />
              { /*Funcion normal (HAY QUE PASAR EL BIND) */}
              <input type="button" value="Restar" onClick={this.restar.bind(this)} />
            </p>

          </section>
          <Sidebar />
        </div>
      </>
    );
  }

}

export default SeccionPruebas;