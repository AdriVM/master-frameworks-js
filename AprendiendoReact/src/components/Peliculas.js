import React from 'react';
import ComponeneStatico from './ComponenteStatico';

class Peliculas extends React.Component {

    render() {

        return (
            <div id="peliculas">
                <h4>Soy el componente de Peliculas</h4>
                <ComponeneStatico />
            </div>

        );
    }

}

export default Peliculas;