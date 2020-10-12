import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import swal from 'sweetalert2'
import Global from '../Global'
import Slider from './Slider'
import Sidebar from './Sidebar'

import ImageDefault from '../assets/images/default.png';

/**
 * 1.- Temenos que recoger el ID del artículo a editar de la URL
 * 2.- Crear un metodo para sacar ese objeto del backend
 * 3.- Tenemos que rellenar el formulario con esos datos
 * 4.- Actualizar el objeto haciendo una peticion al backend
 */


class EditArticle extends Component {


    articleId = null



    constructor(props) {
        super(props);
        //1.- Temenos que recoger el ID del artículo a editar de la URL
        this.articleId = this.props.match.params.id;
        //llamamos al metodo que nos saque el articulo de la BBDD
        this.getArticle(this.articleId);

        // Se carga el objeto para validar el formulario
        // En el curso utiliza el componentWillMount
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'El campo es requerido',
                alpha_num_space: 'El campo sólo puede contener letras, números y espacios'

            }
        });
    }

    getArticle = (id) => {
        Axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            });
    }




    url = Global.url;

    //Nos creamos las referencias para todos los campos
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    }



    changeState = () => {

        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
        //Mostramos los mensajes de error
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar state con formulario
        this.changeState()

        if (this.validator.allValid()) {

            //guardamos en la BBDD
            Axios.put(this.url + 'article/'+ this.articleId, this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        //Sacamos mensaje de que se ha creado bien
                        swal.fire({
                            title: '¡Artículo Editado!',
                            text: 'El artículo se ha editado correctamente :)',
                            icon: 'success'
                        });

                        //Subir la imagen
                        if (this.state.selectedFile !== null) {

                            //Sacar el Id del articulo guardado
                            var articleId = this.state.article._id

                            //Crear form data y añadir fichero
                            const formData = new FormData();

                            //Vinculamos el fichero
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            )

                            //Petición Ajax al backend
                            Axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        swal.fire({
                                            title: 'Fallo al subir la imagen',
                                            text: 'Ups, ha debido ocurrir un error a la hora de subir la imágen, inténtelo más tarde, o póngase en contacto con nosotros',
                                            icon: 'error'
                                        });
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                });


                        } else {
                            this.setState({
                                status: 'success'
                            });
                        }

                    } else {
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        } else {

            this.setState({
                status: 'failed'
            });

            //Mostramos los mensajes de error
            this.validator.showMessages();
            this.forceUpdate();
        }


    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });

    }

    render() {

        if (this.state.status === 'success') {
            return (
                <Redirect to={'/blog'} />
            );

        }

        var article = this.state.article;
        return (
            <>
                <Slider
                    title="Editar Artículo"
                    size="slider-small"
                />
                <div className="center">
                    <section id="content">

                        {
                            this.state.article.title &&
                            <form className="mid-form" onSubmit={this.saveArticle}>
                                <div className="from-group">
                                    <label htmlFor="title">Título:</label>
                                    <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} defaultValue={article.title}/>

                                    {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                                </div>
                                <div className="from-group">
                                    <label htmlFor="content">Contenido:</label>
                                    <textarea name="content" ref={this.contentRef} onChange={this.changeState} defaultValue={article.content}></textarea>

                                    {this.validator.message('content', this.state.article.content, 'required')}

                                </div>
                                <div className="from-group">
                                    <label htmlFor="file0">Imagen:</label>
                                    <div className="image-thumb">               
                                    {
                                        this.state.article.image &&
                                        <img src={ this.url+'get-image/'+article.image } alt={ article.title }/>
                                    }
                                    {
                                        !this.state.article.image &&
                                        <img src={ImageDefault} alt={ article.title }/>
                                    }
                                    </div>
                                    <input type="file" name="file0" onChange={this.fileChange} />
                                </div>

                                <input type="submit" className="btn btn-warning" value="Editar" />

                            </form>
                        }
                        {
                        !this.state.article.title &&
                        <h1 className="sub-header">Cargando...</h1>
                    }


                    </section>
                <Sidebar />
            </div>
            </>
        )
    }
}
export default EditArticle