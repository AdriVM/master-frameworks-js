<template>
<!-- Es como en REACT, todo deve estar englobado en un div -->
    <div id="mi-componente">
        <hr/>
        <h1>MiComponente</h1>
        <h2>{{ subtitulo }}</h2>
        <hr/>
    </div>
</template>
<script>
//tenemos que importarlo en App.vue para usarlo
export default {
    name: 'MiComponente',
    data() {
        return {
            subtitulo: 'Soy el subtitulo de miComponente'
        }
    }
}
</script>