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
        addToCart(dish) {
            // Recupera il carrello da sessionStorage
            const savedCart = sessionStorage.getItem('cart');
            const cart = savedCart ? JSON.parse(savedCart) : [];

            // Verifica se il carrello è vuoto
            if (cart.length === 0) {
                // Se il carrello è vuoto, aggiungi il nuovo piatto al carrello
                cart.push(dish);
            } else {
                // Se il carrello contiene già prodotti
                const restaurantId = dish.restaurant_id; // Sostituisci con il modo in cui ottieni l'ID del ristorante dal nuovo piatto
                const existingRestaurantId = cart[0].restaurant_id; // Supponendo che il primo piatto nel carrello determini il ristorante

                if (restaurantId === existingRestaurantId) {
                    // Se stai aggiungendo un piatto dallo stesso ristorante, aggiungi il piatto al carrello
                    cart.push(dish);
                } else {
                    // Se stai cambiando il ristorante, mostra un avviso e chiedi se desideri svuotare il carrello
                    const confirmMessage = 'Stai cambiando il ristorante. Vuoi svuotare il carrello attuale?';
                    if (window.confirm(confirmMessage)) {
                        // Svuota il carrello
                        cart.length = 0;
                        // Aggiungi il nuovo piatto al carrello
                        cart.push(dish);
                    }
                }
            }

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
