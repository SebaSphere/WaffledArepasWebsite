<template>
  <HomeSlideshow/>
  <ExampleMenu/>
  <!-- FIXME: example div only used in development to make the page bigger -->
  <div class="mt-[30rem]"/>
</template>

<script>
  import HomeSlideshow from '../components/HomeSlideshow.vue'
  import ExampleMenu from "@/components/ExampleMenu";

  export default {
    name: 'HomePage',
    components: {
      HomeSlideshow,
      ExampleMenu
    }
  }
</script>