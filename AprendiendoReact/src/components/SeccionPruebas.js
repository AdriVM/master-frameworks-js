import React from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends React.Component{


        //var HolaMundo = () => {}
        HolaMundo(nombre, edad) {
            var texto = (
              <div>
                <h2>Hola {nombre}</h2>
                <p>{nombre} tiene {edad} años</p>
              </div>
            )
            return texto;
          }

    render(){
        var nombre = "Adrián";
        var presentacion = <h2>Hola, soy {nombre} y estoy aprendiendo React</h2>
        return (
            <div>
                <h2 class="sub-header">Últimos Artículos</h2>

                { /* Dentro de las llaves, se ejecuta js (fijate en presentacion) y nunca se pone ;*/}
                {presentacion}
                <p>
                Editar <code>src/App.js</code> y guardar para reiniciar.
                </p>
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
                <section className="componentes">
                <MiComponente />
                <Peliculas />
                </section>
            </div>
        );
    }

}

export default SeccionPruebas;