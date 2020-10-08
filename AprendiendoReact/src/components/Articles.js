import React, { Component } from 'react';
import {Link} from 'react-router-dom';
/** 
 * Hemos tenido que instalar (npm install --save axios) Axios, 
 * que nos sirve para hacer llamadas FTP en los framework que no lo tienen integrado
 * como REACT o VUE
 * en el caso de ANGULAR si trae para hacer llamadas FTP integrado
 */
import Axios from 'axios';
//Importamos moment para formatear la fecha;
/**
 * NOTA:
 * importamos moment con npm install --save moment react-moment.
 * Si instalamos solo react-moment no funcionará
 */
import Moment from 'react-moment';
import 'moment/locale/es';


import Global from '../Global';
//Importamos la imagen default.png
import ImageDefault from '../assets/images/default.png';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: false,
        status: null
    }

    //inicializamos num a vacio
    num = '';

    componentDidMount() {

        //SEARCH
        var search = this.props.search
        if( search ){
            
            this.getSearchArticles(search);

        }else{

            //Sacamos el valor de home para ver si sacamos los ultimos artículos
            var home = this.props.home

            if( home === 'true' ){
                //si estamos en home, num vale 5 para sacar los 5 ultimos articulos
                this.num = 5;
            }

            this.getArticles(this.num);
        }


    }

    getSearchArticles = (search) => {

        //Usamos el método get pasandole la URL del API-REST como String
        //El parametro search nos servirá para buscar los resultados que coincidan con lo que le pasamos
        Axios.get(this.url+"search/"+search)
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                })

            }).catch( err => {
                this.setState({
                    articles: [],
                    status: 'success'
                })
            });
    }

    getArticles = (num) => {

        //Usamos el método get pasandole la URL del API-REST como String
        //El parametro num nos servirá para limitar los resultados cuando estemos en la home
        Axios.get(this.url+"articles/"+num)
            .then(res => {

                this.setState({
                    articles: res.data.articles,
                    status: 'success'
                })

            });
    }

   /* getArticlesImage = (id) => {
        //Usamos el método get pasandole la URL del API-REST como String
        Axios.get(this.url + "get-image/" + id)
            .then(res => {

            });
    }*/


    render() {
        //console.log(this.state.articles.length);
        if(this.state.articles.length >= 1){

            var listaArticles = this.state.articles.map((article) => {

                var style = {};

                article.image !== undefined && article.image !== null ? (
                    style = {
                        backgroundImage: `url(`+ this.url +`get-image/`+ article.image +`)`
                    }
                ): (
                    style = {
                        backgroundImage: `url(${ImageDefault})`
                    }
                )

                
                return(
                <article className="article-item" id="article-template" key={article._id}>
                    <div className="image-wrap" style={style}></div>

                    <h2>{article.title}</h2>
                    <span className="date">
                        <Moment locale="es" fromNow>{article.date}</Moment>
                    </span>
                    <Link to={ `/blog/articulo/` + article._id }>Leer más</Link>
                    <div className="clearfix"></div>
                </article>
                )
            });

            return (
                <div id="articles">
                    {
                        this.num === '' &&
                        <h1 className="sub-header">LISTADO DE ARTICULOS</h1>
                    }
                    
                    {listaArticles}
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