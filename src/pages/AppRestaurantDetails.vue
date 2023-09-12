
<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import axios from 'axios';

const API = "http://localhost:8000/api/v1"

export default {
    name: 'AppRestaurantDetails',
    data: function () {
        return {
            restaurant: {
                dishes: []
            },
        }
    },
    mounted() {
        const restaurantId = this.$route.params.id;
        console.log('ID del ristorante:', restaurantId);

        axios.get(`${API}/restaurant_typology/${restaurantId}`)
            .then(response => {
                console.log(response.data);
                this.restaurant = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-6">
                <h1 class="text-center">
                    {{ restaurant.activity_name }}
                </h1>
                <img :src="restaurant.image_path" alt="">
                <div>
                    <strong>Indirizzo:</strong> {{ restaurant.address }}
                </div>
                <div>
                    <strong>Tel:</strong> {{ restaurant.mobile_phone }}
                </div>
                <div>
                    <strong>P.IVA:</strong> {{ restaurant.vat }}
                </div>
            </div>
        </div>

    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-4 m-3" v-for="dish in restaurant.dishes" :key="dish.id">
                <h1 class="text-center">
                    {{ dish.name }}
                </h1>
                <img class="dishimage" :src="dish.image_path" alt="">
                <div>
                    <strong>Descrizione:</strong> {{ dish.description }}
                </div>
                <div>
                    <strong>Prezzo:</strong> €{{ dish.price }}
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
.dishimage {
    width: 200px;
    display: inline-block;
    margin: 10px auto;
}
</style>  