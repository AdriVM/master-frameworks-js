import React, { Component } from 'react';
/** 
 * Hemos tenido que instalar (npm install --save axios) Axios, 
 * que nos sirve para hacer llamadas FTP en los framework que no lo tienen integrado
 * como REACT o VUE
 * en el caso de ANGULAR si trae para hacer llamadas FTP integrado
 */
import Axios from 'axios';

class Articles extends Component {
    state = {
        articles: {},
        status: null
    }
    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        //Usamos el método get pasandole la URL del API-REST como String
        Axios.get("http://localhost:3900/api/search/articulo")
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                })

                console.log(this.state)

            });
    }


    render() {
        //console.log(this.state.articles.length);
        if(this.state.articles.length >= 1){

            return (
                <div id="articles">
                    <h1>LISTADO DE ARTICULOS</h1>
                </div>
            )//END RETURN

        }else if(this.state.articles.length === 0 && this.state.status === 'success'){

            return (
                <div id="articles">
                    <h2 className="sub-header">No hay articulos para mostrar</h2>
                    <p>Todavía no hay contenido en esta sección</p>
                </div>
            )//END RETURN

        }else{
            return (
                <div id="articles">
                    <h2 className="sub-header">Cargando</h2>
                    <p>Espere un segundo mientras carga el contenido.</p>
                    <b>:)</b>
                </div>
            )//END RETURN
        }//END IF

        
    }
}
export default Articles;