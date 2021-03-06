import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {
    render() {
        return (
            <>
                <Slider
                    title="Bienvenido al Curso de React"
                    size="slider-big"
                    btn="Ir al Blog"
                />
                <div className="center">
                    <section id="content">
                        <h1 className="sub-header">Últimos Artículos</h1>
                        <Articles home="true"/>
                    </section>
                    <Sidebar />
                </div>
            </>
        );
    }
}
export default Home;