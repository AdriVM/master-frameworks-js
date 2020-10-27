<template>
  <div class="general">
    <SliderComponent titulo="Peliculas" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Peliculas</h2>
        <h3 v-if="this.favorita != null">
          La Pelicula favorita es: <b style="color:cadetblue">{{this.favorita}}</b>
        </h3>
        <div id="articles">
          <!-- 
        v-for="pelicula in peliculas" :key="pelicula.title" 
        :pelicula para que sea un v-bind, si no ponemos los : tomará como string lo que le enviemos
        @favorita es un evento que emitimos desde el componente hijo
      -->
          <div v-for="pelicula in peliculas" :key="pelicula.title">
            <pelicula 
            :pelicula="pelicula"
            @favorita="haLlegadoLaFavorita"></pelicula>
          </div>
        </div>
      </section>
      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Pelicula from "./PeliculaComponent.vue";
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "PeliculasComponent",
  components: {
    Pelicula,
    SliderComponent,
    SidebarComponent,
  },
  methods: {
    haLlegadoLaFavorita(favorita){
      //console.log(favorita)
      this.favorita = favorita.title;
    }
  },
  data() {
    return {
      favorita: null,
      peliculas: [
        {
          title: "La red social (The Social Network)",
          year: 2010,
          image:
            "https://i.blogs.es/fea2d1/the-social-network-la-red-social-2010-jesse-eisenberg/450_1000.jpg",
        },
        {
          title: "Toy Story 3",
          year: 2010,
          image:
            "https://es.web.img3.acsta.net/newsv7/19/01/30/11/29/1331468.jpg",
        },
        {
          title: "Cisne negro (Black Swan)",
          year: 2010,
          image:
            "https://i0.wp.com/35milimetros.es/wp-content/uploads/2019/06/35-milimetros-black-swan-1-e1559386358110.jpg?fit=900%2C506&ssl=1",
        },
        {
          title: "El hilo invisible (Phantom Thread)",
          year: 2017,
          image:
            "https://esculpiendoeltiempocom.files.wordpress.com/2018/02/1515544263_phantom_thread_unit_daniel_day_lewis_vicky_krieps_14.jpg?w=1040",
        },
        {
          title: "El irlandés (The Irishman)",
          year: 2019,
          image:
            "https://pics.filmaffinity.com/El_irland_s-566085801-large.jpg",
        },
      ],
    };
  }
};
</script>