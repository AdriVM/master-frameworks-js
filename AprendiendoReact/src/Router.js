import React, { Component } from 'react';
//Importamos el módulo de react-router-dom que acabamos de instalar con ( npm install --save react-router-dom )
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


//Importar Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';

import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

//Componentes reales
import Home from './components/Home';
import Blog from './components/Blog';
import Article from './components/Article';
import Formulario from './components/Formulario';
import Search from './components/Search';


class Router extends Component {

    render() {

        return (

            <BrowserRouter>

                <Header />


                {/* CONFIGURAR RUTAS Y PÁGINAS */}
                <Switch>
                    {/* AQUÍ DENTRO SE DEFINEN TODAS NUESTRAS RUTAS; PARA QUE FUNCIONEN HAY QUE IR A APP.JS */}
                    { /**
                     *      El exact es importante en la ruta con path /, porque si no se pone, como todo tiene /loquesea, no funciona
                     *      Tambien puede ponerse la ruta / al final de todas y no haría falta el exact
                     * */ }
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/articulo/:id" component={Article}/>
                    <Route exact path="/blog/busqueda/:search" component={Search}/>
                    <Route exact path="/redirect/:search" render={ 
                        (props) => {
                            var search = props.match.params.search;
                            //Redirigimos a la ruta de busqueda
                            return(
                                <Redirect to={ '/blog/busqueda/' + search } />
                            )
                            
                        }
                        }/>
                    <Route exact path="/formulario" component={Formulario} />
                    <Route path="/peliculas" component={Peliculas} />
                    <Route path="/ruta-prueba" component={SeccionPruebas} />
                    <Route path="/mi-componente" component={MiComponente} />

                    <Route path="/pagina-1" render={() => (
                        <>
                            <Slider
                                title="Pruebas"
                                size="slider-small"
                            />
                            <div className="center">
                                <section id="content">
                                    <h1>Hola Mundo desde la ruta pagina-1</h1>
                                    <p>Me cargo sin componente porque creo el render directamente en la ruta.</p>
                                    <MiComponente saludo="Hola amigo" />
                                </section>
                                <Sidebar />
                            </div>
                        </>
                    )} />

                    <Route path="/pruebas/:nombre/:apellidos?" render={(props) => {

                        //Recogemos el Nombre de la URL
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;


                        return (
                            <>
                                <Slider
                                    title="Pruebas"
                                    size="slider-small"
                                />
                                <div className="center">
                                    <section id="content">
                                        <h1 className="sub-header">Ruta de Pruebas</h1>
                                        <h2>
                                            {nombre && !apellidos &&
                                                <>{nombre}</>
                                            }
                                            {nombre && apellidos &&
                                                <>{nombre} {apellidos}</>
                                            }
                                        </h2>
                                    </section>
                                    <Sidebar />
                                </div>
                            </>
                        )
                    }
                    } />
                    <Route component={Error} />

                </Switch>


                <div className="clearfix"></div>

                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;