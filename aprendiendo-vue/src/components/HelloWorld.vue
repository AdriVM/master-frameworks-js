<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<p>
      Para obtener una guía y recetas sobre cómo configurar / personalizar este proyecto,<br>
      revisar la
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">documentación vue-cli</a>.
    </p>
    <h3>Plugins CLI Instalados</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Links Esenciales</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosistema</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>-->
    <h2>Hola Mundo</h2>
    <h2>{{ texto }}</h2>
    <MiComponente/>
    <b>FIN DEL COMPONENTE HOLA MUNDO</b>
  </div>
</template>

<script>
//Importamos nuestro componente
import MiComponente from './MiComponente.vue'
//data() nos permite devolver las propiedades que queremos mostrar en la vista
export default {
  name: 'HelloWorld',
  components: {
      MiComponente
  },
  props: {
    msg: String
  },
  data() {
    return {
      texto: "Hola Mundo desde el componente"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: #42b983;
  color: beige;
  margin: 0;
  padding: 0;
  width: 100vw;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
