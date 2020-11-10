<template>
  <div class="general" v-if="article">
    <SliderComponent :titulo="article.title" />
    <div class="center">
      <section id="content">
        <article class="article-item article-detail">
          <div class="image-wrap" v-if="article.image">
            <img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
            />
          </div>
          <h1 class="sub-header">{{ article.title }}</h1>
          <span class="date"> {{ article.date | moment("from", "now") }} </span>
          <p>
            {{ article.content }}
          </p>
          <div class="clearfix"></div>
          <a class="btn btn-danger" @click="deleteArticle(article._id)"
            >Eliminar</a
          >
          <routerLink
            :to="'/editar-articulo/' + article._id"
            class="btn btn-warning"
            >Editar</routerLink
          >
        </article>
      </section>
      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
    
<script>
//Importamos axios para hacer peticiones AJAX al backend
import axios from "axios";
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
import Global from "../Global";
//importamos sweetalert2
import swal from "sweetalert2";

export default {
  name: "ArticleComponent",
  components: {
    SliderComponent,
    SidebarComponent,
  },
  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    var articleID = this.$route.params.id;
    this.getArticle(articleID);
  },
  methods: {
    getArticle(articleID) {
      axios.get(this.url + "article/" + articleID).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },
    deleteArticle(articleID) {
      const swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: "btn-danger",
        },
        buttonsStyling: true,
      });
      swalWithBootstrapButtons
        .fire({
          title: "ATENCIÓN",
          html:
            "<p>¿Está seguro de que quiere eliminar el artículo?</p> <p>Será eliminado <b>definitivamente</b> del sistema.</p>",
          icon: "warning",
          confirmButtonText: "¡Sí, eliminalo!",
          showCancelButton: true,
          cancelButtonText: "Cancelar"
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            axios.delete(this.url + "/article/" + articleID).then((res) => {
              if (res.data.status == "success") {
              swal
                .fire({
                  title: "Eliminación Correcta",
                  text: "El artículo ha sido eliminado correctamente.",
                  icon: "success",
                  confirmButtonText: "¡Genial!",
                })
                .then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    //redireccionamos al blog
                    this.$router.push("/blog/");
                  }
                });
              }
            });
          }else if(result.isDismissed){
            swal
                .fire({
                  title: "Eliminación Cancelada",
                  html: "<p>No te preocupes, no se ha borrado nada.</p><p></b><b>:)</p>",
                  icon: "success",
                  confirmButtonText: "¡Genial!",
            })
          }
        });
    },
  },
};
</script>