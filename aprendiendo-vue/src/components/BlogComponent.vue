<template>
  <div class="general">
    <SliderComponent titulo="Blog" />
    <div class="center">
      <section id="content">
        <h2 class="sub-header">Blog</h2>
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
  name: "BlogComponent",
  components: {
    SliderComponent,
    SidebarComponent,
  },
};
</script>