<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue'

// export default {
//     name: 'ShoppingCart',
//     props: {
//         dishes: Object
//     },
//     data: function () {
//         return {
//             cartDishesSaved: [],
//         }
//     },
//     methods: {
//     },
//     mounted() {
//         console.log(this.dishes);
//     }
// }
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
        this.cart = this.dishes;
    }
};
</script>

<template>
    CIAO DAL CARRELLO
    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-4 m-3" v-for="dish, index in cart" :key="dish.id">
                {{ dish.name }}
                <button class="btn btn-danger" @click="removeFromCart(index)"> Elimina</button>
            </div>
        </div>
    </div>
</template>
<style scoped></style>