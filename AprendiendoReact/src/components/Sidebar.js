import React from 'react';
import { Link, Redirect } from 'react-router-dom'
class Sidebar extends React.Component {

    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false
    };

    redirectToSeaarch = (e) => {
        e.preventDefault();
        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        })
    }

    render() {
        //LA REDIRECCION DEBE HACERSE EN EL RENDER {//<Redirect to={ '/redirect'+ this.state.search } />}
        
        if(this.state.redirect){
            return (
            <Redirect to={ '/redirect/' + this.state.search } />
            );
        }



        return (
            <aside id="sidebar">
                {
                    this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <Link to={ '/blog/crear' } className="btn btn-success">Crear Artículo</Link>
                    </div>
                }
                
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas.</p>
                    <form onSubmit={this.redirectToSeaarch}>
                        <input type="text" name="search" ref={ this.searchRef }/>
                        <input type="submit" className="btn" name="submit" value="Buscar"/>
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;