import React from 'react';

class Slider extends React.Component {

    render() {

        return (
            <div id="slider" className={ this.props.size }>
                { /* ACCEDEMOS A LAS VARIABLES QUE PASAMOS DESDE APP */ }
                <h1>{ this.props.title }</h1>
                {
                    this.props.btn &&
                    <a href="blog.html" className="btn-white">{ this.props.btn }</a>
                }
                
            </div>
        );
    }
}

export default Slider;