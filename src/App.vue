<template>
  <NavBar/>
  <RestaurantMenu/>
  <HelloWorld/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import RestaurantMenu from './components/ExampleMenu.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    RestaurantMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
