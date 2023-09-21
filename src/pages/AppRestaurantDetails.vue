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
            cart: [],
            image_url: "http://127.0.0.1:8000/storage/"
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
    <section class="dish">
        <div class="content">
            <!-- card ristoranti -->
            <div class="container-ristorante">
                <div class="row">
                    <div class="card mb-3 text-center">
                        <h1>
                            {{ restaurant.activity_name }}
                        </h1>
                        <div class="card-text">
                            <div>
                                <h4><strong>{{ restaurant.address }}</strong></h4>
                            </div>
                            <div>
                                <h4>
                                    <i class="fa-solid fa-phone"></i>
                                    {{ restaurant.mobile_phone }}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-center">
            Menù
        </h1>
        <!-- card piatti -->
        <div class="container-piatti">
            <div class="row justify-content-center">
                <div class="card rounded col-lg-4 col-md-5 col-sm-10" v-for="dish, idx in restaurant.dishes" :key="dish.id">
                    <div class="card-image">
                        <!-- <img class="dishimage" :src="dish.image_path" alt=""> -->
                        <img class="dishimage" :src="image_url + dish.image_path" :alt="dish.name">
                    </div>
                    <div class="bg p-2">
                        <h4>
                            {{ dish.name }}
                        </h4>
                        <div>
                            {{ dish.description }}
                        </div>
                        <div class="d-flex ">
                            <h5>€{{ dish.price }}</h5>
                            <a class="text-decoration-none" @click="addToCart(dish)">
                                <i class="fa-solid fa-cart-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div v-if="$route.name !== 'restaurantDetail'">
        <ShoppingCart :dishes="cart" />
    </div>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

.dish {
    background-color: #e9f8f5;
    padding: 30px;
}

.content {
    margin-top: 80px;
}

.container-ristorante {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

.card {
    border: hidden;
    background-color: #e9f8f5;

}



.container-piatti {
    display: flex;
    justify-content: space-around;

    .card {
        border-radius: 20px;
        margin-bottom: 30px;

        .card-image {
            width: 100%;
            height: 200px;

            img {
                border-radius: 20px 20px 0 0;
                width: 100%;
                height: 100%;
            }

        }

        .bg {
            background-color: #ffe2af;
            border-radius: 0 0 20px 20px;
            height: 130px;
            position: relative;

            h4 {
                margin-bottom: 0;
            }

            a {
                font-size: 1.5rem;
                margin-left: 7px;
                cursor: pointer;
                color: $green-color;
            }

            .d-flex {
                height: 40px;
                align-items: center;
                position: absolute;
                right: 10px;
                bottom: 5px;

                h5 {
                    margin: 0;
                }
            }
        }
    }


}


button {
    width: 100px;
    height: 50px;
    background-color: #00846b;
}

img {
    width: 100%;
    object-fit: cover;
}
</style>
