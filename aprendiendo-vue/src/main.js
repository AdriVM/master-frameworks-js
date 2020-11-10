import Vue from 'vue'
import App from './App.vue'
//Importamos las dependencias del router que nos hemos descargado de npm install --save vue-router
import VueRouter from 'vue-router';
//Importamos vuelidate 
import Vuelidate from 'vuelidate';

//Componentes
import UltimosArticulos from './components/UltimosArticulosComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import FormularioComponent from './components/FormularioComponent.vue';
import PaginaComponent from './components/PaginaComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import BuscadorComponent from './components/BuscadorComponent.vue';
//Ruta para la redireccion del buscador
import Redirect from './components/Redirect.vue';
import ArticleComponent from './components/ArticleComponent.vue'
import CrearArticuloComponent from './components/CrearArticuloComponent.vue';
import EditarArticuloComponent from './components/EditarArticuloComponent.vue';


import MiComponente from './components/MiComponente.vue';
import HolaMundo from './components/HelloWorld.vue';
import Peliculas from './components/PeliculasComponent.vue';

Vue.config.productionTip = false
//Hacemos que vue haga uso del VueRouter
Vue.use(VueRouter);
//Hacemos que vue haga uso del Vuelidate
Vue.use(Vuelidate);

//Ponemos moment en castellano, estos require 
//pueden ser imports para que quede solo con el use, 
//incluso el require de vue-moment, puede ser importado
// y pasado al use tal como hicimos con el vuelidate
const moment = require('moment');
require('moment/locale/es');
//Ahora se lo pasamos al vue.use
Vue.use(require('vue-moment'), {
  moment
})

//Definimos las rutas
const routes = [
  { path: '/home', component: UltimosArticulos },
  { path: '/blog', component: BlogComponent },
  { path: '/articulo/:id', name: 'article', component: ArticleComponent },
  { path: '/formulario', component: FormularioComponent },
  { path: '/pruebas/:id?', name: 'pruebas' ,component: PaginaComponent },//El name se utiliza para hacer enlaces y otras cosas por el estilo
  //la ? es para hacer opcional el parámetro

  { path: '/ultimos-articulos', component: UltimosArticulos },
  { path: '/busqueda/:searchString', component: BuscadorComponent },
  { path: '/crear-articulo', name: "create", component: CrearArticuloComponent },
  { path: '/editar-articulo/:id', component: EditarArticuloComponent },

  { path: '/redirect/:searchString', component: Redirect },
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
