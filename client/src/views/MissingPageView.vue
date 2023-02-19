<template>
  <NavBar/>
  <div class="fixed w-full h-[75%] flex items-center justify-center">
    <div class="text-center text-gray-600">
      <h2 class="text-4xl">Looks like you're lost...</h2>
      <h2 class="text-4xl">return <router-link to="/" class="text-blue-300 hover:text-blue-500 underline">home</router-link>???</h2>
      <br>
      <h3>404: page not found</h3>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'MissingPage',
    components: {
      NavBar
    }
  }
</script>