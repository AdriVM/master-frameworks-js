import React from 'react';
//Importamos Redirect
import { Redirect } from 'react-router-dom';

class Sidebar extends React.Component {

    searchRef = React.createRef();

    state = {
        search: '',
        redirect: false
    }


    redirectToSearch = (e) =>{
        //bloquemos el evento para que no recargue la página
        e.preventDefault();
        
        //Damos valos al state
        //IMPORTANTE this.searchRef.CURRENT.VALUE
        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });
    }

    render() {
        //La redirección debemos hacerla dentro del Render
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
                        <button  className="btn btn-success">Crear Artículo</button>
                    </div>
                }
                
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas.</p>
                    <form onSubmit={ this.redirectToSearch }>
                        <input type="text" name="search" ref={ this.searchRef }/>
                        <input type="submit" className="btn" name="submit" value="Buscar"/>
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;