<template>
  <div id="app">
    <h1>{{ restaurantName }}</h1>
    <h2>Today's Menu</h2>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      restaurantName: 'meowwwwwww kitchen',
      menuItems: [
        { id: 1, name: 'Pizza', price: 12.99 },
        { id: 2, name: 'Pasta', price: 15.99 },
        { id: 3, name: 'Steak', price: 20.99 }
      ]
    }
  }
}
</script>