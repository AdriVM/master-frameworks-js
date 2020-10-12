import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';

import Articles from './Articles';

class Search extends Component{
    render(){

        //Recogemos el string a buscar, (IMPORTANTE: this.props.match.params para acceder al parámetro por URL);
        var searched = this.props.match.params.search;
        
        return (
            <>
            <Slider
                title={ 'Busqueda: ' + searched }
                size="slider-small"
            />
            <div className="center">
                <section id="content">
                    {/* Listado de artículos que vendrán del API-REST */}
                    <Articles search={ searched }/>
                </section>
                <Sidebar
                    blog="true"
                />
            </div>
        </>
        );
    }
}
export default Search;
