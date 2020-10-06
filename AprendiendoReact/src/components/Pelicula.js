import React from 'react';

class Pelicula extends React.Component{

    /*marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
    }*/

    render(){
        const pelicula = this.props.pelicula;
        //Creamos una constante que nos recoja la imagen y el titulo
        const { titulo, imagen } = this.props.pelicula;

        return(
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={ imagen } alt={ titulo }/>
                </div>

                <h2>{ titulo }</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="article.html">Leer más</a>
                {/* DEBE MANDARSE ASI O HACER UN METODO QUE LO LLAME PORQUE SI MANDAS 
                        this.props.marcarFavorita(this.props.pelicula) 
                NO FUNCIONA 
                
                SE PUEDE MANDAR ASÍ:
                    () => {this.props.marcarFavorita(this.props.pelicula)}
                O LLAMANDO AL MÉTODO (MIRAR MÉTODO COMENTADA ARRIBA) marcar CON:
                    this.marcar
                */}
                <button onClick={ () => {this.props.marcarFavorita(pelicula)} }>Marcar como Favorita</button>
                <div className="clearfix"></div>
            </article>
        )

    }

}
export default Pelicula;