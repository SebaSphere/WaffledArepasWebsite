<template>
  <div class="flex items-center justify-between p-4 bg-dark-brown text-white">
      <nav>
        <!--
        TODO: replace logo with a proper commissioned one instead of AI generated
        TODO: make sure logo is a .svg
        -->
        <ul class="flex items-center">
          <li class="mr-8">
            <img
                alt="Waffled Arepas"
                src="../assets/generated-placeholder-logo-waffled-arepas.png"
                class="w-20 object-cover rounded-full"
            >
          </li>
          <!-- TODO: make navbar mobile friendly, add hamburger menu -->
          <div class="space-x-[15%] hidden md:flex">
            <li v-for="item in items" :key="item.text">
              <router-link :to="item.url" class="font-medium">{{ item.text }}</router-link>
            </li>
          </div>
        </ul>
      </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        items: [
          { text: 'HOME', url: '/' },
          { text: 'MENU', url: '/menu' },
          { text: 'ABOUT', url: '/about' },
          { text: 'CATERING', url: '/catering' },
        ],
      };
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  .navbar {
    font-family: 'Lato', sans-serif;
  }
</style>