<template>
<!-- Es como en REACT, todo deve estar englobado en un div -->
    <section id="content">
    <h2 class="sub-header">{{ titulo }}</h2>
        <hr/>
        <h1>MiComponente</h1>
        <h2>{{ subtitulo }}</h2>
        <hr/>
    </section>
</template>
<script>
//tenemos que importarlo en App.vue para usarlo
export default {
    name: 'MiComponente',
    data() {
        return {
            titulo: 'Mi Componente',
            subtitulo: 'Soy el subtitulo de miComponente'
        }
    }
}
</script>