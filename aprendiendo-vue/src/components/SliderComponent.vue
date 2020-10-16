<template>
    <div id="slider" :class="estilo">
        <h1>{{ titulo }}</h1>
        <a href="blog.html" class="btn-white" v-if="estilo === 'slider-big'">Ir al Blog</a>
    </div>
</template>
<script>
export default {
    name: 'SliderComponent',
    props: {
    titulo: String,
    estilo: String
  }
}
</script>