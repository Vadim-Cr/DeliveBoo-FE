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
    <div class="row justify-content-start">
        <div>
            <div class="card">
                <div class="card-header p-3">Inserisci i dati per effettuare l'ordine</div>

                <div class="card-body">
                    <form method="POST" class="form-group">

                        <div class="w-100 d-flex justify-content-between flex-wrap">
                            <div class="form-group mb-3">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Nome</label>
                                <input id="name" type="text" class="form-control" name="name" v-model="this.name" required
                                    autofocus>
                            </div>
                            <div class="form-group mb-3">
                                <label for="last_name" class="col-md-4 col-form-label text-md-right">Cognome</label>
                                <input id="last_name" type="text" class="form-control" name="last_name"
                                    v-model="this.last_name" required autofocus>
                            </div>
                            <div class="form-group mb-3">
                                <label for="address" class="col-md-4 col-form-label text-md-right">Indirizzo</label>
                                <input id="address" type="text" class="form-control" name="address" v-model="this.address"
                                    required autofocus minlength='13' maxlength='13'>
                            </div>
                            <div class=" form-group mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                <input id="email" type="text" class="form-control w-50" name="email" v-model="this.email"
                                    required autofocus minlength='13' maxlength='14'>
                            </div>
                            <div class=" form-group mb-3">
                                <label for="mobile_phone" class="col-md-4 col-form-label text-md-right">Cellulare</label>
                                <input id="mobile_phone" type="text" class="form-control w-50" name="mobile_phone"
                                    placeholder="+39" v-model="this.mobile_phone" required autofocus minlength='13'
                                    maxlength='14'>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </div>
    <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary my-3 m-auto" @click="inviaDati()">
            Ordina
        </button>
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
    