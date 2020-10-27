<template>
  <div class="general">
    <SliderComponent titulo="Formulario" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Formulario</h2>
      </section>
      <SidebarComponent />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import SliderComponent from "./SliderComponent.vue";
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "FormularioComponent",
  components: {
    SliderComponent,
    SidebarComponent,
  },
};
</script>