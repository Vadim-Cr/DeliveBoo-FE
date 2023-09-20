<script>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import Payments from './Payments.vue';

export default {
    name: 'ShoppingCart',
    components: {
        Payments
    },
    props: {
        dishes: Array
    },
    data() {
        return {
            cart: [],
            totalAmount: 0,
        };
    },
    methods: {
        removeFromCart(index) {
            this.cart.splice(index, 1);
            this.updateSessionStorage();
        },
        updateSessionStorage() {
            sessionStorage.setItem('cart', JSON.stringify(this.cart));
        },
        calculateTotal() {
            this.totalAmount = this.cart.reduce((acc, dish) => acc + dish.price, 0);
            console.log(this.totalAmount);
        },
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
        Carrello
    </h1>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-   4 m-3" v-for="dish, index in cart" :key="dish.id">
                <p>
                    NOME: {{ dish.name }}
                </p>
                <p>PREZZO: €{{ dish.price.toFixed(2) }}</p>
                <button class="btn btn-danger" @click="removeFromCart(index)">
                    Elimina
                </button>
            </div>
            <div class="container">
                <Payments :cart="cart" />
            </div>
        </div>
    </div>
</template>
<style scoped>
h1 {
    margin-top: 95px;
}
</style>