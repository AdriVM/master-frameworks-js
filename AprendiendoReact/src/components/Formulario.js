import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Formulario extends Component {
    /**
     * Las referencias son para recoger los campos.
     */
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoMujerRef = React.createRef();
    generoHombreRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    };



    /**
     * El formulario por defecto recarga la página. 
     * Para evitar esto, devemos pasar el evento (e)
     * y hacer e.preventDefault(); dentro del método.
     * 
     * Nota: Si usamos el onchange para llamar al método, tenemos que comentar
     * e.preventDefault(); porque provoca un fallo en los radiobuttons 
     * que hace que necesiten 2 click para que se seleccionen
     * */
    recibirFormulario = (e) => {
        e.preventDefault();


        console.log('¡¡¡¡Formulario enviado!!!!');
        console.log(this.state.user);


    }
    pintarValores = () => {

        var genero = '';

        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value;
        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value;
        } else if(this.generoOtroRef.current.checked){
            genero = this.generoOtroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        });
    }

    render() {

        const style = {
            border: '5px dotted black',
            width: '55%',
            height: 'auto',
            margin: 'auto'
        }

        return (
            <>
                <Slider
                    title="Formulario"
                    size="slider-small"
                />
                <div className="center">
                    <section id="content">
                        <h1 className="sub-header">Formulario de contacto</h1>
                        {/* Mostramos los datos del formulario */}
                        {
                            Object.keys(this.state.user).length !== 0 &&
                            <div style={style}>
                                <h2>Datos del usuario</h2>
                                {
                                    this.state.user.nombre &&
                                    <p>
                                        <label>
                                            <b>Nombre:</b>
                                        </label>
                                        <br />
                                        <span>{this.state.user.nombre}</span>
                                    </p>
                                }
                                {
                                    this.state.user.apellidos &&
                                    <p>
                                        <label><b>Apellidos:</b></label>
                                        <br />
                                        <span>{this.state.user.apellidos}</span>
                                    </p>
                                }
                                {
                                    this.state.user.bio &&
                                    <p>
                                        <label>
                                            <b>Bio:</b>
                                        </label>
                                        <br />
                                        <span>{this.state.user.bio}</span>
                                    </p>
                                }
                                {
                                    this.state.user.genero !== '' &&
                                    <p>
                                        <label>
                                            <b>Género:</b>
                                        </label>
                                        <br />
                                        <span>{this.state.user.genero}</span>
                                    </p>
                                }


                            </div>
                        }


                        <form action="#" className="mid-form" onSubmit={this.recibirFormulario} onChange={this.pintarValores}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                {/* el atributo ref serive para que referenciemos en react el campo*/}
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                {/* el atributo ref serive para que referenciemos en react el campo*/}
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biografía</label>
                                {/* el atributo ref serive para que referenciemos en react el campo*/}
                                <textarea name="bio" cols="30" rows="10" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                {/* el atributo ref serive para que referenciemos en react el campo*/}
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} /> Mujer
                    <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} /> Hombre
                    <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} /> Otro
                </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>
                    </section>
                    <Sidebar />
                </div>
            </>
        )
    }
}
export default Formulario;