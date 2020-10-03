import React from 'react';
//Importamos el compenente Peliculas
import Pelicula from './Pelicula';

class Peliculas extends React.Component {

    state = {};

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 5);
        //peliculas[random].titulo = 'ESDLA: La Comunidad del Anillo';

        //Cambiamos el titulo de la pelicula 0
        peliculas[0].titulo = 'ESDLA: La Comunidad del Anillo';

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula) => {

        //Seteamos el state con la pelicula favorita
        this.setState({
            favorita: pelicula
        });
        
    }


    
  









    /**
     * ====================================================================
     *                  CICLO DE VIDA DE UN COMPONENTE
     * ====================================================================
     */
    //Este Método se ejecuta antes de renderizar el componente y cuando el componente se va a montar (DEPRECATED).
    //La mejor práctica en este caso es inicializar el state con los datos directamente
    /**
     *  // Before
     *  class ExampleComponent extends React.Component {
     *      state = {};
     *      
     *      componentWillMount() {
     *          this.setState({
     *              currentColor: this.props.defaultColor,
     *              palette: 'rgb',
     *       });
     *     }
     *   }
     * 
     *  // After
     *  class ExampleComponent extends React.Component {
     *     state = {
     *       currentColor: this.props.defaultColor,
     *       palette: 'rgb',
     *     };
     *   }
     * 
     */
    UNSAFE_componentWillMount(){
        console.log('Se va a cargar el componente Peliculas');
        this.setState({
            peliculas: [
                { titulo: 'El Señor de los Anillos: La Comunidad del Anillo', imagen: 'https://img2.rtve.es/imagenes/ruedo-escenico-senor-anillos-comunidad-del-anillo-26-10-19/1572105180302.jpg' },
                { titulo: 'El Señor de los Anillos: Las Dos Torres', imagen: 'https://alchetron.com/cdn/isengard-cd6fc2c5-f1da-4d7b-80f3-fd25fe42186-resize-750.jpeg' },
                { titulo: 'El Señor de los Anillos: El Retorno del Rey', imagen: 'https://www.bolsamania.com/cine/wp-content/uploads/2016/04/24-4.jpg' },
                { titulo: 'Doctor Strange', imagen: 'https://hipertextual.com/files/2019/09/hipertextual-filtracion-revela-que-doctor-strange-2-resucitara-dos-personajes-muertos-marvel-2019435911.jpg' },
                { titulo: 'El Caballero Oscuro', imagen: 'https://img.europapress.es/fotoweb/fotonoticia_20170507133023_1200.jpg' }
            ],
            nombre: 'Adrián Vázquez Mirasierra',
            favorita: {}
        });
        console.log('State rellenado');
    }
    //Este Método se ejecuta antes de renderizar el componente y cuando el componente está montado.
    componentDidMount() {
        console.log('Se acaba de cargar el componente Peliculas');
    }

    //Este Método se ejecuta cuando el componente se va a quitar de la ejecución.
    componentWillUnmount() {
        console.log('Me voy a desmontar')
    }

    //Este Método se encarga de renderizar la vista del componete.
    render() {

        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        return (
            <div className="peliculas">
                <h2 className="sub-header">Películas</h2>
                <p>Selección de las películas favorias de { this.state.nombre }</p>
                <p>
                    <button onClick={ this.cambiarTitulo }>
                        Cambiar titlulo de primera película
                    </button>
                </p>
                {
                    //Condicional, si existe this.state.favorita.titulo
                    //  Puede ser así this.state.favorita.titulo && o terciaria
                    // Tambien se puede hacer en js (antes del return del render) haciendo un if y creando una varible con el html que mostraremos, tan solo habria que llamar a esa variable entre {}
                    // O incluso creando un método que nos haga la comprobación fuera del render y llamar a ese método con { this.nombreMetodo }
                    this.state.favorita.titulo ? (
                    <p className="favorita" style={ pStyle }>
                        <strong>La Película favorita es: </strong>
                        <span id="favorita">{ this.state.favorita.titulo }</span>
                    </p>
                    ) : (
                        <p>Todavía no hay película favorita</p>
                    )
                }
                
                { /* CREAR COMPONETE PELICULA */ }

                <div id="articles">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula 
                                    pelicula={ pelicula } 
                                    key={ i }
                                    marcarFavorita={ this.favorita }
                                />
                            )
                        })
                    }
                </div>

            </div>

        );
    }

}

export default Peliculas;