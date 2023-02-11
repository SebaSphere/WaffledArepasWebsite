<template>
  <div id="app" class="flex flex-col items-center text-center font-sans text-xl mt-10">
    <h1 class="text-2xl font-bold mb-4">{{ restaurantName }}</h1>
    <h2 class="text-lg font-bold mb-4">Today's Menu</h2>
    <ul class="w-[30%] flex flex-wrap">
      <li v-for="item in menuItems" :key="item.id" class="mb-2 w-1/3 p-2">
        <div class="">{{ item.name }}</div>
        <div class="">{{ item.price }}</div>
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
          { id: 3, name: 'Steak', price: 20.99 },
          { id: 4, name: 'Ice Cream', price: 6.99 },
          { id: 5, name: 'Waffles', price: 16.99 },
          { id: 6, name: 'Water', price: 3.99 }
        ]
      }
    }
  }
</script>