import React from 'react';
import { Link } from 'react-router-dom'

class Slider extends React.Component {

    render() {

        return (
            <div id="slider" className={ this.props.size }>
                { /* ACCEDEMOS A LAS VARIABLES QUE PASAMOS DESDE APP */ }
                <h1>{ this.props.title }</h1>
                {
                    this.props.btn &&
                    <Link to={ '/blog' } className="btn-white">{ this.props.btn }</Link>
                }
                
            </div>
        );
    }
}

export default Slider;