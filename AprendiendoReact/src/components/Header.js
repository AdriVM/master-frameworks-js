import React from 'react';
import Logo from '../assets/images/logo.svg';
//Importamos navLink para que funcionen las rutas de la cabecera
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/*LOGO*/}
                    <div id="logo">
                        <img src={ Logo } className="app-logo" alt="Logotipo"/>
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>
                    {/*MENÚ*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mi-componente" activeClassName="active">Contacto</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pagina-1" activeClassName="active">Página 1</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas" activeClassName="active">Página 2</NavLink>
                            </li>
                        </ul>
                    </nav>
                {/*LIMPIAR FLOTADOS*/}
                <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;