import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';

import Sidebar from './Sidebar';
//Importamos la imagen default.png
import ImageDefault from '../assets/images/default.png';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    }

    getArticle = () => {
        //Recogemos el ID de la URL
        var id = this.props.match.params.id;

        //Hacemos petición por GET a la API-REST
        Axios.get(this.url + 'article/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                });

            }).catch( err => {
                this.setState({
                    article: [],
                    status: 'success'
                })
            });
    }

    componentDidMount() {
        this.getArticle();
    }

    render() {

        var article = this.state.article;
        var style = {};
       
        if(article.length !== 0 && this.state.status !== null){
            article.image !== undefined && article.image !== null ? (
                style = {
                    backgroundImage: `url(` + this.url + `get-image/` + article.image + `)`
                }
            ) : (
                    style = {
                        backgroundImage: `url(${ImageDefault})`
                    }
                )
        }
            


        return (
            <div className="center">
                <section id="content">

                    {   //SI EXISTE EL ARTICULO
                        article.length !== 0 && this.state.status !== null &&
                        <article className="article-item article-detail">
                            <div className="image-wrap" style={style}></div>
                            <h1 className="sub-header">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>
                            <a href="#" className="btn btn-danger">Eliminar</a>
                            <a href="#" className="btn btn-warning">Editar</a>
                            <div className="clearfix"></div>
                        </article>
                    }
                    {   //SI NO EXISTE EL ARTICULO
                        article.length === 0 && this.state.status == 'success' &&
                        <div id="article">
                            <h2 className="sub-header">El artículo no existe</h2>
                            <p>Intentelo de nuevo más tarde y disculpe las molestias</p>
                            <b>:)</b>
                        </div>
                    }
                    {   //SI EL STATUS AUN ES NULL
                        this.state.status === null &&
                        <div id="article">
                            <h2 className="sub-header">Cargando</h2>
                            <p>Espere un segundo mientras carga el contenido.</p>
                            <b>:)</b>
                        </div>
                    }



                </section>

                <Sidebar />

            </div>
        )
    }
}
export default Article;