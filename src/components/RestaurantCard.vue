<script>
import { ref } from 'vue'
import axios from 'axios';

const API = "http://localhost:8000/api/v1"

export default {
  name: 'RestaurantCard',
  data: function () {
    return {
      restaurants: [],
    }
  },

  mounted() {
    axios.get(API + '/restaurant_typology')
      .then(response => {
        this.restaurants = response.data;
        console.log(this.restaurants)
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<template>
  <div v-for="restaurant in restaurants" :key="restaurant.id">
    <h1>{{ restaurant.activity_name }}</h1>
    <ul>
      <li v-for="typology in restaurant.typologies" :key="typology.id">{{ typology.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
