import React from 'react';
import Logo from '../assets/images/logo.svg';

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
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="formulario.html">Contacto</a>
                            </li>
                            <li>
                                <a href="#">Página 1</a>
                            </li>
                            <li>
                                <a href="#">Página 2</a>
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