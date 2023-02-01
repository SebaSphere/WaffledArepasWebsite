<template>
  <div class="flex items-center justify-between p-4 bg-dark-brown text-white">
    <div class="container mx-auto">
      <nav>
        <!-- TODO: replace logo with a proper commissioned one instead of AI generated -->
        <ul class="flex items-center justify-center">
          <li class="mr-6">
            <img
                alt="Waffled Arepas"
                src="../assets/generated-placeholder-logo-waffled-arepas.png"
                class="w-20 object-cover rounded-full"
            >
          </li>
          <div class="container mx-auto grid grid-cols-3 content-start">
            <li v-for="item in items" :key="item.text" class="flex items-center justify-center">
              <a :href="item.url" class="font-medium">{{ item.text }}</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      items: [
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
      ],
    };
  },
};
</script>