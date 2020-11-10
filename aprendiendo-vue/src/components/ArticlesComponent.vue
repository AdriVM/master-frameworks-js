<template>

  <div id="article-list" v-if="articles && articles.length >= 1">
    <article
      class="article-item"
      v-for="article in articles"
      :key="article._id"
    >
      <div class="image-wrap">
        <img
          :src="url + 'get-image/' + article.image"
          :alt="article.title"
          v-if="article.image"
        />
        <img
          src="../assets/images/default.png"
          :alt="article.title"
          v-if="!article.image"
        />
      </div>

      <h2>
        <routerLink :to="{ name: 'article', params: { id: article._id }}">
          {{ article.title }}
        </routerLink>
        </h2>
      <span class="date"> {{ article.date | moment("from", "now") }} </span>
      <routerLink :to="{ name: 'article', params: { id: article._id }}">Leer más</routerLink>
      <div class="clearfix"></div>
    </article>
  </div>
  <div v-else-if="articles && articles.length < 1">
    <b>No hay artículos para mostrar en este momento.</b>
  </div>
  <div v-else>
    <b>Cargando...</b>
  </div>
</template>
<script>
import Global from '../Global';

export default {
  name: "ArticlesComponent",
  props: ["articles"],
  data(){
      return{
          url: Global.url
      }
  }
};
</script>