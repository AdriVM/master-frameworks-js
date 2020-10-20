<template>
  <section id="content">
    <h2 class="sub-header">Página de Pruebas</h2>
    <b>{{ id_desde_url }}</b>
    <p>
        <label>El nombre es: {{ nombre }}</label>
    </p>
    <button @click="actualizarNombre()">Actualizar Nombre</button>
    <button @click="redirigirAlBlog()">Ir al Blog</button>
  </section>
</template>
<script>
//created() es un método del ciclo de vida del componente que se ejecuta cuando el componente está creado
//mounted() es un método del ciclo de vida del componente que se ejecuta cuando el componente está cargado
//updated() es un método del ciclo de vida del componente que se ejecuta cuando el componente se actualiza
//destroyed() es un método del ciclo de vida del componente que se ejecuta cuando el componente se destruye
//En data() cargamos las propiedades que vayamos a utilizar
export default {
  name: "PaginaComponent",
  created(){
    console.log('componente creado!!');
  },
  mounted() {
      this.cambioValorUrl();
      console.log('componente montado!!');
  },
  updated(){
      console.log('componente actualizado!!');
  },
  destroyed(){
      console.log('componente destruido!!');
  },
  data() {
    return {
      id_desde_url: null,
      nombre: 'Adrián Vázquez'
    };
  },
  methods: {
    actualizarNombre(){
      this.nombre = 'Rogal Dorn';
      console.log(this.nombre);
    },
    cambioValorUrl(){
        this.id_desde_url = this.$route.params.id;
    },
    redirigirAlBlog(){
        //this.$router.push('/blog');
        this.$router.push({ name: 'pruebas', params: { id: 'Redireccion' } });
        this.cambioValorUrl();
        
    }
  }

};
</script>