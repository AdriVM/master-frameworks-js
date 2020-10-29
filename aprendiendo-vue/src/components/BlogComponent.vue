<template>
  <div class="general">
    <SliderComponent titulo="Blog" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Blog</h2>
        <div id="articles" v-if="articles">
          <ArticlesComponent :articles="articles"/>
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
  name: "BlogComponent",
  components: {
    SliderComponent,
    SidebarComponent,
    ArticlesComponent
  },
  data() {
    return {
      url: Global.url,
      articles: [],
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    //Método que nos saca todos los articulos
    getArticles() {
      //Hacemos petición al backend con axios
      axios.get(this.url+"articles/").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>