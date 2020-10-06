import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './Sidebar';

import Articles from './Articles';

class Blog extends Component {

    render() {
        return (
            <>
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <section id="content">
                        {/* Listado de artículos que vendrán del API-REST */}
                        <Articles/>
                    </section>
                    <Sidebar
                        blog="true"
                    />
                </div>
            </>
        );
    }
}
export default Blog;