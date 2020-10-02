import React from 'react';
import './assets/css/App.css';

//Importar Componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import SeccionPruebas from './components/SeccionPruebas'




//Tambien se pueden crear funciones que podemos llamar en el HTML

function App() {

  return (
    <div className="App">
      <Header />
      <Slider />
      <div class="center">
        <section id="content">
          <SeccionPruebas/>
        </section>
        <Sidebar />
        <div class="clearfix"></div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
