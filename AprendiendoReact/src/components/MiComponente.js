import React from 'react';

class MiComponente extends React.Component{

    //El Método Render es el encargado de mostrar la vista
    render(){

        let receta = {
            nombre: 'Pizza',
            tipo: 'Pizza de Jamón y Queso',
            ingradientes: ['Masa','Tomate', 'Queso', 'Jamón Cocido'],
            calorias: 400
        }
        /*
            <>
                <h1>Hola, soy el componente llamado Mi Componente</h1>
                <h2>Esto es un subtitulo para ver que usando un fragment (y sólo si se usa, o un div o algo que englobe) puedo mandar varias cosas a la vez.</h2>
            </>
        */

        return (
            <>
                {
                    this.props.saludo &&
                    <>
                        <h3>==========================</h3>
                            <h1>Desde una prop:</h1>
                            <h2>{ this.props.saludo }</h2>
                        <h3>==========================</h3>
                    </>
                }
                <h1>{ receta.nombre }</h1>
                <h2>{ receta.tipo }</h2>
                <h3>{ '('+ receta.calorias +' calorias)' }</h3>
                <hr/>
                <div>
                    <ol>
                        {
                            receta.ingradientes.map( (ingrediente, i) => {
                                
                                console.log(ingrediente);
                                return (
                                    <li key={ i }>{ ingrediente }</li>
                                )
                                
                            })
                        }
                    </ol>
                </div>
            </>
        );
    }

}

export default MiComponente;
//Ahora tenemos que ir a App.js a importar este componente


/**
 *          NOTA
 * 
 * import React from 'react';
 * class MiComponente extends React.Component {}
 * 
 * Tambien puede hacerse de forma algo más limpia como:
 * 
 * import React { Component } from 'react';
 * class MiComponente extends Component {}
 */