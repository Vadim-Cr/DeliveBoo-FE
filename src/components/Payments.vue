<script>
import axios from 'axios';
import Braintree from './../components/Braintree.vue';

const API_BASE_URL = "http://localhost:8000/api"; // Aggiorna l'URL base dell'API

export default {
    components: {
        Braintree
    },
    props: ['cart'],
    data() {
        return {
            name: '',
            last_name: '',
            address: '',
            email: '',
            mobile_phone: '',
            totalAmount: 0,
            orderStatus: true,
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
    mounted() {
        // Esegui eventuali operazioni iniziali qui
    },
    methods: {
        calculateTotal(cart) {
            if (cart && Array.isArray(cart) && cart.length > 0) {
                this.totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
            } else {
                this.totalAmount = 0;
            }
        },
        async inviaDati() {
            const customerForm = {
                name: this.name,
                last_name: this.last_name,
                address: this.address,
                email: this.email,
                mobile_phone: this.mobile_phone
            };

            try {
                const response = await axios.post(`${API_BASE_URL}/invia-dati`, {
                    customerForm, // Invia i dati del cliente come parte della richiesta
                    order: this.cart, // Invia anche il carrello come parte della richiesta
                });

                console.log(response.data); // Puoi gestire la risposta qui
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>

<template>
    <div class="container">
        <form action="POST">

            <div class="group-form m-3">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required v-model="this.name">
            </div>

            <div class="group-form m-3">
                <label for="last_name">Cognome:</label>
                <input type="text" id="last_name" name="last_name" required v-model="this.last_name">
            </div>

            <div class="group-form m-3">
                <label for="address">Indirizzo:</label>
                <input type="text" id="address" name="address" required v-model="this.address">
            </div>

            <div class="group-form m-3">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" required v-model="this.email">
            </div>

            <div class="group-form m-3">
                <label for="mobile_phone">Telefono:</label>
                <input type="text" id="mobile_phone" name="mobile_phone" required v-model="this.mobile_phone">
            </div>

            <button type="button" @click="inviaDati()">Invia</button>
        </form>
    </div>
    <div>
        <Braintree />
        <h2>
            Il totale da pagare è: €{{ totalAmount.toFixed(2) }}
        </h2>
    </div>
</template>
    
    
<style scoped>
.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    /* -webkit-appearance: none;
        -moz-appearance: none; */
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}
</style>
    