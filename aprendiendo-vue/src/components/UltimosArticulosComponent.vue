<template>
  <div class="general">
    <SliderComponent
      :home="true"
      titulo="Bienvenido al Curso de Vue"
    />
    <div class="center">
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
      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "UltimosArticulosComponent",
  components: {
    SliderComponent,
    SidebarComponent,
  },
};
</script>