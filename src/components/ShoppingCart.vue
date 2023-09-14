<script>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue'

export default {
    name: 'ShoppingCart',
    props: {
        dishes: Array
    },
    data() {
        return {
            cart: []
        };
    },
    methods: {
        removeFromCart(index) {
            this.cart.splice(index, 1);
            this.updateSessionStorage();
        },
        updateSessionStorage() {
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
        }
    },
    mounted() {
        // Inizializza il carrello utilizzando i dati da sessionStorage se disponibili
        const savedCart = sessionStorage.getItem('cart');
        this.cart = savedCart ? JSON.parse(savedCart) : [];

        // Aggiorna sessionStorage quando il carrello cambia
        this.$watch(
            'cart',
            () => {
                this.updateSessionStorage();
            },
            { deep: true }
        );
    }
};
</script>

<template>
    <h1 class="text-center">
        Shopping Cart
    </h1>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-4 m-3" v-for="dish, index in cart" :key="dish.id">
                {{ dish.name }}
                <button class="btn btn-danger" @click="removeFromCart(index)">
                    Elimina
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped></style>