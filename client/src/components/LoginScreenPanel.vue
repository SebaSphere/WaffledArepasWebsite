<template>
  <div class="flex flex-col md:flex-row h-screen">
    <div class="md:w-1/2 h-screen bg-cover bg-center"
         :style="`background-image: url(${backgroundImage})`"></div>
    <div class="md:w-1/2 flex items-center justify-center">
      <form class="w-full md:w-3/4 lg:w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-gray-900">Login</h2>
        <div v-if="showInvalidCredentials" :class="bgStyle" class="bg-red-100 text-red-500 border border-red-500 rounded px-4 py-2">
          Invalid credentials, try again.
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email Address
          </label>
          <input v-model="email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="handleLogin">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/404">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showInvalidCredentials: false
    };
  },
  methods: {
    async handleLogin() {
      const bcrypt = require('bcryptjs');
      try {
        // Call your authentication API endpoint here
        // Pass in this.email and this.password as the credentials
        // If authentication is successful, redirect to the user's dashboard
        throw new Error("This is a test error")
      } catch (error) {
        console.log(error)
        this.email = '';
        this.password = '';
        this.showInvalidCredentials = true;
      }
      console.log(this.email)
    },
  },
  computed: {
    backgroundImage() {
      return 'https://cdn.discordapp.com/attachments/566383494218121216/1076997811045945394/Fq5CPNy.jpg';
    }
  },
};
</script>
