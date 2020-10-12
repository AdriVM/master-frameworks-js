import React, { Component } from 'react';
import Axios from 'axios';
import swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom'
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

            }).catch(err => {
                this.setState({
                    article: [],
                    status: 'success'
                })
            });
    }

    componentDidMount() {
        this.getArticle();
    }


    deleteArticle = (id) => {
        swal.fire({
            title: '¿Seguro que quiere eliminar el artículo?',
            text: 'Si elimina el artículo desaparecerá definitivamente.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo',
            cancelButtonText: '¡Espera, espera!'
        }).then((result) => {
            if (result.value) {
                swal.fire(
                    '¡Artículo Eliminado!',
                    'El artículo ha sido eliminado correctamente :)',
                    'success'
                )
                Axios.delete(this.url + 'article/' + id)
                    .then(res => {

                        this.setState({
                            article: res.data.article,
                            status: 'deleted'
                        });

                    });
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal.fire(
                    '¡Eliminación cancelada!',
                    'Siempre es bueno dar una segunda oportunidad :)',
                    'error'
                )
            }
        })

    }

    render() {

        //comporbamos si ha borrado
        if (this.state.status === 'deleted') {

            return (
                <Redirect to="/blog" />
            )

        }

        var article = this.state.article;
        var style = {};

        if (article.length !== 0 && this.state.status !== null) {
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
                            <div className="clearfix"></div>
                            <button className="btn btn-danger" onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            }>Eliminar</button>
                            <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>
                            <div className="clearfix"></div>
                        </article>
                    }
                    {   //SI NO EXISTE EL ARTICULO
                        article.length === 0 && this.state.status === 'success' &&
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