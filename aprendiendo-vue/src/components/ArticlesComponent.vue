<template>
  <div id="article-list">
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

      <h2>{{ article.title }}</h2>
      <span class="date"> {{ article.date }} </span>
      <a href="article.html">Leer más</a>
      <div class="clearfix"></div>
    </article>
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