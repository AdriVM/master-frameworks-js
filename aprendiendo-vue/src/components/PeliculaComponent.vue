<template>
    <article class="article-item" id="article-template">
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
        <!-- @click="" o v-on:click=""-->
        <input type="button" value="Marcar como favorita"
            @click="pasarFavoritaAlPadre(pelicula)"
        />
        <div class="clearfix"></div>
      </article>
</template>
<script>
export default {
    name: 'Pelicula',
    props: ['pelicula'],
    methods: {
        pasarFavoritaAlPadre(pelicula){
            //Emitimos la pelicula al elemento padre
            this.$emit('favorita', pelicula)
        }
    }
    
}
</script>