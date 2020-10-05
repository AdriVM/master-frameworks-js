import React from 'react';

class Sidebar extends React.Component {

    render() {

        return (
            <aside id="sidebar">
                {
                    this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="#" className="btn btn-success">Crear Artículo</a>
                    </div>
                }
                
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas.</p>
                    <form>
                        <input type="text" name="search"/>
                        <input type="submit" className="btn" name="submit" value="Buscar"/>
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;