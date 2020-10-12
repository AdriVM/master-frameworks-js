import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import SimpleReactValidator from 'simple-react-validator'
import swal from 'sweetalert2'
import Global from '../Global'
import Slider from './Slider'
import Sidebar from './Sidebar'

//Validacion de formularios y alertas


class CreateArticle extends Component {



    constructor(props) {
        super(props);
        // Se carga el objeto para validar el formulario
        // En el curso utiliza el componentWillMount
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'El campo es requerido',
                alpha_num_space: 'El campo sólo puede contener letras, números y espacios'

            }
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
                content: this.contentRef.current.value
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
            Axios.post(this.url + 'save', this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        //Sacamos mensaje de que se ha creado bien
                        swal.fire({
                            title: '¡Artículo Creado!',
                            text: 'El artículo se ha creado correctamente :)',
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
        console.log(this.state.article.title)

        return (
            <>
                <Slider
                    title="Crear Artículo"
                    size="slider-small"
                />
                <div className="center">
                    <section id="content">
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="from-group">
                                <label htmlFor="title">Título:</label>
                                <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} />

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                            </div>
                            <div className="from-group">
                                <label htmlFor="content">Contenido:</label>
                                <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>

                                {this.validator.message('content', this.state.article.content, 'required')}

                            </div>
                            <div className="from-group">
                                <label htmlFor="file0">Imagen:</label>
                                <input type="file" name="file0" onChange={this.fileChange} />
                            </div>

                            <input type="submit" className="btn btn-success" value="Guardar" />

                        </form>
                    </section>
                    <Sidebar />
                </div>
            </>
        )
    }
}
export default CreateArticle