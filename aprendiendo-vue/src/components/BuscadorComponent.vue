<template>
  <div class="general">
    <SliderComponent :titulo="'Búsqueda: ' + this.searchString" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header" v-if="articles">Artículos Encontrados</h2>
        <h2 class="sub-header" v-else>Sin resultados</h2>
        <div id="articles" v-if="articles">
          <ArticlesComponent :articles="articles"/>
        </div>
        <div v-else>
            <h2 v-if="!articles">No hay articulos que coincidan con tu búsqueda</h2>
        </div>
      </section>
      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
//Importamos axios para hacer peticiones AJAX al backend
import axios from "axios";
import Global from '../Global'
/*
Aclaración a porqué se debe poner entre llaves:
Debido a que es una exportación normal y no una por default, necesita de {}, en este caso sería {Global} from...
*/
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import ArticlesComponent from "./ArticlesComponent.vue";
export default {
    name: 'BuscadorComponent',
    components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  data() {
    return {
      url: Global.url,
      articles: null,
      searchString: null,
    };
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  methods: {
    //Método que nos saca todos los articulos que coincidan con la búsqueda
    getArticlesBySearch(searchString) {
      //Hacemos petición al backend con axios
      axios.get(this.url+"search/"+ searchString).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>