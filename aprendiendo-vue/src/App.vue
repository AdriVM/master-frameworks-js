<template>
  <div id="app">
    <HeaderComponent />
    <!--<UltimosArticulosComponent/>-->
    <router-view></router-view>
    <FooterComponent />
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
import HeaderComponent from "./components/HeaderComponent.vue";

//import UltimosArticulosComponent from './components/UltimosArticulosComponent.vue';
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    //MiComponente,
    HeaderComponent,
    //UltimosArticulosComponent,
    FooterComponent,
  },
};
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
@import "./assets/styles.css";
</style>
