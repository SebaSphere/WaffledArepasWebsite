<template>
  <NavBar/>
  <LoginScreenPanel/>
</template>

<script>
import LoginScreenPanel from '@/components/LoginScreenPanel.vue'

export default {
  name: 'LoginScreen',
  components: {
    LoginScreenPanel
  }
}
</script>