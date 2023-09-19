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
          //console.log(this.restaurants);
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
    <h2 class="p-4">
      <i class="fa-solid fa-circle-check"></i>
      Locali che potrebbero piacerti
    </h2>
    <!-- Checkbox per la selezione delle tipologie -->
    <div class="container mt-2">
      <div class="check">
        <label
          v-for="typology in ['Italiano', 'Cinese', 'Giapponese', 'Messicano', 'Indiano', 'Francese', 'Spagnolo', 'Tedesco', 'Americano', 'Fast-food', 'Vegetariano', 'Vegano']"
          :key="typology" class="rounded-pill " :class="{ 'selected': selectedTypologies.includes(typology) }">
          <input type="checkbox" :value="typology" v-model="selectedTypologies" @change="updateSearch" id="myCheckbox">
          <strong>{{ typology }}</strong>
        </label>
      </div>
    </div>
    <!-- Lista dei ristoranti -->
    <div class="container rist">
      <div class="row">
        <router-link v-for="   restaurant    in    restaurants   "
          :to="{ name: 'restaurantDetail', params: { id: restaurant.id } }" :key="restaurant.id" class="card col-4 "
          style="width: 18rem;">
          <img :src="restaurant.image_path" alt="">
          <div class="card-body">
            <strong>{{ restaurant.activity_name }}</strong>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

a {
  text-decoration: none;
}

.container {
  display: flex;
}

.container.mt-2 {
  margin-bottom: 200px;
}

.container.rist {
  margin-bottom: 100px;
}

.fa-circle-check {
  color: $second-color;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
}

.card {
  border: hidden;
  height: 140px;
  position: relative;
  margin-bottom: 15px;
}



.card-body {
  position: absolute;
  top: 125px;
  left: -5px;
  font-size: 1.7rem;
  text-align: left;

}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform .15s ease-in-out;

  &:hover {

    transform: scale(1.05);
  }
}

.check {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 50px;


  label {
    margin-top: 30px;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    background-color: #fff3da;
    position: relative;
    padding: 15px;
    cursor: pointer;

    &:hover {
      background-color: #ffc244;
    }



    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 2px;
      width: 20px;
      height: 20px;
      background-color: transparent;

    }
  }

}

label.selected {
  background-color: #ffc244;
}

input[type="checkbox"]:checked+label::before {
  background-color: #000;

}



/* Nascondo visivamente le checkbox */
input[type="checkbox"] {
  position: absolute;
  left: -9999px;

}
</style>
