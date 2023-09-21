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
            image_url: "http://127.0.0.1:8000/storage/"
        };
    },
    watch: {
        cart: {
            immediate: true,
            handler(newVal) {
                this.calculateTotal(newVal);
            }
        }
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
    <section>
        <div class="container">
            <div class="card">
                <div class="card-header p-3 text-center"><strong>Riepilogo ordine</strong></div>
                <div class="card-body" v-for="dish, index in cart" :key="dish.id">
                    <div class="details-order">
                        <div>
                            <span>
                                <img class="dishimage" :src="image_url + dish.image_path" :alt="dish.name">
                            </span>
                            <span>
                                <strong>{{ dish.name }}</strong>
                            </span>
                        </div>
                        <div>
                            <button class="btn btn button " @click="removeFromCart(index)">
                                <i class="fa-solid fa-circle-minus"></i>
                            </button>
                            <p> <strong>€{{ dish.price.toFixed(2) }}</strong></p>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 class="text-center">
                        <strong>Totale €{{ totalAmount.toFixed(2) }}</strong>
                    </h6>
                </div>
            </div>
            <Payments :cart="cart" />
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    background-color: #e9f8f5;

}

.container {
    display: flex;
    padding-top: 150px;

    .card {
        width: 50%;
        height: 50%;

    }

    .button {
        cursor: pointer;
        color: red;
        font-size: 1.5rem;
    }

    .card-header {
        background-color: #00a082;
        color: #fff;
    }

    .details-order {
        display: flex;
        justify-content: space-between;



        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-right: 10px;
            object-fit: cover;
        }
    }

    h6 {
        font-size: 1.4rem;
    }

}
</style>