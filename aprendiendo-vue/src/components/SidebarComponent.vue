<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <routerLink to="/crear-articulo" class="btn btn-success">Crear Artículo</routerLink>
    </div>
    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas.</p>
      <form @submit.prevent="goSearch">
        <input type="text" name="search" v-model="searchString"/>
        <input type="submit" class="btn" name="submit" value="Buscar" />
      </form>
    </div>
  </aside>
</template>
<script>
export default {
  name: "SlidebarComponent",
  data(){
    return{
      searchString: null
    }
  },
  methods: {
    goSearch(){
      //Hacemos la redirección a la ruta del buscador pasándole el string a buscar
      /**
       * NOTA:
       * Redirecciona desde cualquier página menos en la del buscador, 
       * que cambia la url, pero no recarga la página. 
       * Para solucionar esto, haremos un componente intermedio
       * llamado redirect.vue, que se encargará de redireccionar en todos los casos.
       */
      this.$router.push('/redirect/'+ this.searchString);
    }
  }
};
</script>