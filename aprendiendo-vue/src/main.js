import Vue from 'vue'
import App from './App.vue'
//Importamos las dependencias del router que nos hemos descargado de npm install --save vue-router
import VueRouter from 'vue-router';

//Componentes
import UltimosArticulos from './components/UltimosArticulosComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import FormularioComponent from './components/FormularioComponent.vue';
import PaginaComponent from './components/PaginaComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';


import MiComponente from './components/MiComponente.vue';
import HolaMundo from './components/HelloWorld.vue';
import Peliculas from './components/PeliculasComponent.vue';

Vue.config.productionTip = false
//Hacemos que vue haga uso del VueRouter
Vue.use(VueRouter);

//Definimos las rutas
const routes = [
  { path: '/home', component: UltimosArticulos },
  { path: '/blog', component: BlogComponent },
  { path: '/formulario', component: FormularioComponent },
  { path: '/pruebas/:id?', name: 'pruebas' ,component: PaginaComponent },//El name se utiliza para hacer enlaces y otras cosas por el estilo
  //la ? es para hacer opcional el parámetro

  { path: '/ultimos-articulos', component: UltimosArticulos },
  { path: '/mi-componente', component: MiComponente },
  { path: '/hola-mundo', component: HolaMundo },
  { path: '/peliculas', component: Peliculas },
  
  { path: '/', component: UltimosArticulos },
  { path: '*', component: ErrorComponent }
]

//Cremoas el router
const router = new VueRouter({
  routes,
  mode: 'history'
});

//Damos de alta el router en vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
