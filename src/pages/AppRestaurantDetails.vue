<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import axios from 'axios';
import ShoppingCart from './../components/ShoppingCart.vue';

const API = "http://localhost:8000/api/v1"

export default {
    name: 'AppRestaurantDetails',
    components: {
        ShoppingCart
    },

    data: function () {
        return {
            restaurant: {
                dishes: []
            },
            cart: []
        }
    },
    methods: {
        addToCart(item) {
            // Recupera il carrello da sessionStorage
            const savedCart = sessionStorage.getItem('cart');
            const cart = savedCart ? JSON.parse(savedCart) : [];

            // Aggiungi il nuovo piatto al carrello
            cart.push(item);

            // Salva il carrello aggiornato in sessionStorage
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    },
    mounted() {
        const restaurantId = this.$route.params.id;

        axios.get(`${API}/restaurant_typology/${restaurantId}`)
            .then(response => {
                this.restaurant = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>

<template>
    <!-- card ristoranti -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-6">
                <h1 class="text-center">
                    {{ restaurant.activity_name }}
                </h1>
                <img :src="restaurant.image_path" alt="foto">
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
    <!-- carti piatti -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-4 m-3" v-for="dish, idx in restaurant.dishes" :key="dish.id">
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
                <button class="btn btn-primary" @click="addToCart(dish)"> Aggiungi al carrello </button>
            </div>
        </div>

    </div>
    <div v-if="$route.name !== 'restaurantDetail'">
        <ShoppingCart :dishes="cart" />
    </div>
</template>
<style scoped>
.dishimage {
    width: 200px;
    display: inline-block;
    margin: 10px auto;
}
</style>
