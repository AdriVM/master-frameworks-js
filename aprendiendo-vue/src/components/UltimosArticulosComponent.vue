<template>
  <div class="general">
    <SliderComponent
      :home="true"
      titulo="Bienvenido al Curso de Vue"
    />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Últimos Artículos</h2>
        <ArticlesComponent :articles="articles"/>
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

import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import ArticlesComponent from "./ArticlesComponent.vue";

export default {
  name: "UltimosArticulosComponent",
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
    this.getLastArticles(5);
  },
  methods: {
    //Método que nos saca todos los articulos
    getLastArticles(num) {
      //Hacemos petición al backend con axios
      axios.get(this.url+"articles/"+num).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>