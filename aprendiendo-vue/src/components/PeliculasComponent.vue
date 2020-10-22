<template>
      <section id="content">
    <h2 class="sub-header">Peliculas</h2>
    <div id="articles">
      <article class="article-item" id="article-template" v-for="pelicula in peliculas" :key="pelicula.title">
        <div class="image-wrap">
            <!-- v-bind: o : aseacas, es lo mismo -->
          <img
            v-bind:src="pelicula.image"
            v-bind:alt="pelicula.title"
            :title="pelicula.title"
            />
        </div>

        <h2>{{ pelicula.title }}</h2>
        <span :class="{
            dateyellow: pelicula.year < 2015,
            dategreen: pelicula.year >= 2015,
            datered: pelicula.year == 2017
        }"> {{ pelicula.year }} </span>
        <a href="article.html">Leer más</a>
        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
    name: 'PeliculasComponent',
    data(){
        return{
            peliculas: [
                { title: 'La red social (The Social Network)', year: 2010, image: 'https://i.blogs.es/fea2d1/the-social-network-la-red-social-2010-jesse-eisenberg/450_1000.jpg' },
                { title: 'Toy Story 3', year: 2010, image: 'https://es.web.img3.acsta.net/newsv7/19/01/30/11/29/1331468.jpg' },
                { title: 'Cisne negro (Black Swan)', year: 2010, image: 'https://i0.wp.com/35milimetros.es/wp-content/uploads/2019/06/35-milimetros-black-swan-1-e1559386358110.jpg?fit=900%2C506&ssl=1' },
                { title: 'El hilo invisible (Phantom Thread)', year: 2017, image: 'https://esculpiendoeltiempocom.files.wordpress.com/2018/02/1515544263_phantom_thread_unit_daniel_day_lewis_vicky_krieps_14.jpg?w=1040' },
                { title: 'El irlandés (The Irishman)', year: 2019, image: 'https://pics.filmaffinity.com/El_irland_s-566085801-large.jpg' }
            ]
        }
    }
}
</script>