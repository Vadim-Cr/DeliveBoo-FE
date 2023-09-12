<script>
import { ref } from 'vue';
import axios from 'axios';

const API = "http://localhost:8000/api/v1";

export default {
  name: 'TestQueryRestaurants',
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
    <div>
      <label
        v-for="typology in ['italiano', 'cinese', 'giapponese', 'messicano', 'indiano', 'francese', 'spagnolo', 'tedesco', 'americano', 'fast food', 'vegetariano', 'vegano']"
        :key="typology">
        <input type="checkbox" :value="typology" v-model="selectedTypologies" @change="updateSearch">
        {{ typology }}
      </label>
    </div>

    <!-- Lista dei ristoranti -->
    <div v-for="restaurant in restaurants" :key="restaurant.id">
      <h1>{{ restaurant.activity_name }}</h1>
      <ul>
        <li v-for="typology in restaurant.typologies" :key="typology.id">{{ typology.name }}</li>
      </ul>
    </div>
  </div>
</template>


<style scoped></style>
