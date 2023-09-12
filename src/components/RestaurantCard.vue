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
  <div class="container d-flex justify-content-center my-3">
    <div class="row">
      <router-link v-for="restaurant in restaurants" :to="{ name: 'restaurantDetail', params: { id: restaurant.id } }"
        :key="restaurant.id" class="card col-4 p-3">
        <h1 class='text-center bg-dark text-light p-2 rounded'>
          {{ restaurant.activity_name }}
        </h1>

        <ul>
          <li v-for="typology in restaurant.typologies" :key="typology.id">{{ typology.name }}</li>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
