<template>
<!-- Es como en REACT, todo deve estar englobado en un div -->
    <section id="content">
    <h2 class="sub-header">{{ titulo }}</h2>
        <hr/>
        <h1>MiComponente</h1>
        <h2>{{ subtitulo }}</h2>
        <hr/>
        <div>
            <h2>Reactividad</h2>
            <!-- Vincularemos la propiedad nombre con este input -->
            <input type="text" placeholder="Escribe el texto que se rellenará la propiedad nombre" v-model="nombre" />
            <span>El nombre es: <b>{{ nombre }}</b> </span>
            <pre>
                {{ $data }}
            </pre>
        </div>
        <hr/>
        <div>
            <h2>Directivas condicionales</h2>
            <input type="number" min="0" max="100" v-model="edad"/>
            <br/>
            <span>La edad es: <b>{{ edad }}</b></span>
            <p v-if="edad && edad >= 18 && edad < 65">
                Es mayor de edad.
            </p>
            <p v-else-if="edad >= 65">
                Es un anciano/a
            </p>
            <p v-else-if="edad <= 10 && edad > 5">
                Es un niño/a
            </p>
            <p v-else-if="edad <= 5">
                Es un niñito/a pequeño
            </p>
            <p v-else>
                Es menor de Edad
            </p>
        </div>
        <hr/>
        <div>
            <h2>Directivas Iterativas</h2>
            <ol>
                <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
            </ol>
        </div>
    </section>
</template>
<script>
//tenemos que importarlo en App.vue para usarlo
export default {
    name: 'MiComponente',
    data() {
        return {
            titulo: 'Mi Componente',
            subtitulo: 'Soy el subtitulo de miComponente',
            nombre: '',
            edad: 18,
            peliculas: [
                'Taron y el caldero mágico',
                'Peter Pan',
                'El Rey León',
                'Aladdin',
                'Blancanieves'
            ]
        }
    }
}
</script>