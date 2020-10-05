import React from 'react';
import './assets/css/App.css';
//IMPORTAMOS ROUTER.JS PARA QUE FUNCIONEN LAS RUTAS
import Router from './Router';


//import SeccionPruebas from './components/SeccionPruebas'
//import Peliculas from './components/Peliculas';




//Tambien se pueden crear funciones que podemos llamar en el HTML

function App() {



  return (
    <div className="App">
          {/*
          <Peliculas/>
          */}
          <Router/>
        
    </div>

  );
}

export default App;
