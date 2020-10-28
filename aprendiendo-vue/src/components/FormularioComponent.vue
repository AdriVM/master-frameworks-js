<template>
  <div class="general">
    <SliderComponent titulo="Formulario" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Formulario</h2>
        <form action="#" class="mid-form" @submit.prevent="mostrarUsuario">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />
            <div class="error" v-if="this.submitted && !$v.user.nombre.required">El nombre es requerido.</div>
            <div class="error" v-if="this.submitted && !$v.user.nombre.alpha">El nombre solo admite caracteres.</div>
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellidos" />
            <div class="error" v-if="this.submitted && !$v.user.apellidos.required">Los apellidos son requeridos.</div>
            <div class="error" v-if="this.submitted && !$v.user.apellidos.alpha">Los apellidos solo admiten caracteres.</div>
          </div>
          <div class="form-group">
            <label for="bio">Biografía</label>
            <textarea
              name="bio"
              cols="30"
              rows="10"
              v-model="user.bio"
            ></textarea>
            <div class="error" v-if="this.submitted && !$v.user.bio.required">La biografía es requerida.</div>
            <div class="error" v-if="this.submitted && !$v.user.bio.minLength">La biografía requeride un mínimo de {{$v.user.bio.$params.minLength.min}} caracteres.</div>
          </div>
          <div class="form-group radiobuttons">
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="user.genero"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              value="hombre"
              v-model="user.genero"
            />
            Hombre
            <input
              type="radio"
              name="genero"
              value="otro"
              v-model="user.genero"
            />
            Otro
            <div class="error" v-if="this.submitted && !$v.user.genero.required">El genero es requerido.</div>
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
        <p v-if="user.nombre && user.apellidos && user.bio && user.genero">
          {{ user.nombre + "  " + user.apellidos }}
          <br />
          {{ user.bio }}
          <br />
          {{ user.genero }}
        </p>
      </section>
      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
//https://vuelidate.js.org/#getting-started; HAY QUE IMPORTAR VUELIDATE EN EL main.js Y HACERLE UN USE PARA QUE NO PETE
import { required, alpha, minLength } from 'vuelidate/lib/validators';
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";


export default {
  name: "FormularioComponent",
  components: {
    SliderComponent,
    SidebarComponent,
  },
  data() {

    return {
      submitted: false,
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: "",
      },
    };
  },
   validations: {
     user: {
      nombre: {
        required,
        alpha
      },
      apellidos: {
        required,
        alpha
      },
      bio: {
        required,
        minLength: minLength(10)
      },
      genero: {
        required
      }
    }
  },
  methods: {
    mostrarUsuario() {
      console.log(this.user);
      this.submitted = true;

      this.$v.$touch();
      if(this.$v.$invalid) {
        return false;
      }
      alert('¡¡¡Validación Pasada con Éxito!!!');
    },
  }
};
</script>