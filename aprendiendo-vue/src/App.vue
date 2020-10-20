<template>
  <div id="app">
    <HeaderComponent/>
    <SliderComponent estilo="slider-big" titulo="Bienvenido al Curso de Vue"/>
    <div class="center">
      
      <!--<UltimosArticulosComponent/>-->
      <router-view></router-view>

      <SidebarComponent/>
      <div class="clearfix"></div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
/*
<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bienvenid@ a tu aplicación Vue.js"/>
    <MiComponente/>
*/
//import HelloWorld from './components/HelloWorld.vue';
//Importamos nuestro componente
//import MiComponente from './components/MiComponente.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import SliderComponent from './components/SliderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
//import UltimosArticulosComponent from './components/UltimosArticulosComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //MiComponente,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    //UltimosArticulosComponent,
    FooterComponent
  }
}
</script>

<style>
/*
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*/
/* Importamos nuestros estilos */
@import './assets/styles.css';
</style>
