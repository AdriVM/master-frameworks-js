import React from 'react';
import './assets/css/App.css';

//Importar Componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

//import SeccionPruebas from './components/SeccionPruebas'
import Peliculas from './components/Peliculas';




//Tambien se pueden crear funciones que podemos llamar en el HTML

function App() {

  var ButtonSlider = "Ir al Blog";

  return (
    <div className="App">
      <Header />
      <Slider 
        title="Bienvenido al Curso de React"
        btn={ ButtonSlider }
      />
      <div className="center">
        <section id="content">
          <Peliculas/>
        </section>
        <Sidebar />
        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
