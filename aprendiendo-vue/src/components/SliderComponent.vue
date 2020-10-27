<template>
    <div id="slider" :class="{
        'slider-big': home,
        'slider-small': !home
    }">
        <h1>{{ titulo }}</h1>
        <router-link to="blog" class="btn-white" v-if="home">Ir al Blog</router-link>
    </div>
</template>
<script>
export default {
    name: 'SliderComponent',
    props: {
    titulo: String,
    home: Boolean
  }
}
</script>