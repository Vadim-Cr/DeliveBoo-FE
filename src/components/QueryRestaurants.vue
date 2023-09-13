<script>
import { ref } from 'vue';
import axios from 'axios';

const API = "http://localhost:8000/api/v1";

export default {
  name: 'QueryRestaurants',
  data: function () {
    return {
      restaurants: [],
      selectedTypologies: [] // Aggiungere questo per tenere traccia delle tipologie selezionate
    };
  },
  mounted() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      axios.get(API + '/search_typology', {
        params: {
          typology_names: this.selectedTypologies
        }
      })
        .then(response => {
          this.restaurants = response.data;
          console.log(this.restaurants);
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateSearch() {
      this.fetchRestaurants();
    }
  }
}
</script>


<template>
  <div>
    <!-- Checkbox per la selezione delle tipologie -->
    <div class="container d-flex justify-content-center">
      <label
        v-for="typology in ['italiano', 'cinese', 'giapponese', 'messicano', 'indiano', 'francese', 'spagnolo', 'tedesco', 'americano', 'fast food', 'vegetariano', 'vegano']"
        :key="typology">
        <input type="checkbox" :value="typology" v-model="selectedTypologies" @change="updateSearch">
        {{ typology }}
      </label>
    </div>

    <!-- Lista dei ristoranti -->
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
  </div>
</template>


<style scoped></style>
