<template>
  <section id="content">
    <h2 class="sub-header">Últimos Artículos</h2>
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-nC2smsN7PDcLUxGxSWkMYvbGvqkTzdDXGA&usqp=CAU"
            alt="Paisaje"
          />
        </div>

        <h2>Artículo de prueba</h2>
        <span class="date"> Hace 5 minutos </span>
        <a href="article.html">Leer más</a>
        <div class="clearfix"></div>
      </article>
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-nC2smsN7PDcLUxGxSWkMYvbGvqkTzdDXGA&usqp=CAU"
            alt="Paisaje"
          />
        </div>

        <h2>Artículo de prueba</h2>
        <span class="date"> Hace 5 minutos </span>
        <a href="article.html">Leer más</a>
        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  name: "UltimosArticulosComponent",
};
</script>