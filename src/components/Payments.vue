<script>
import axios from 'axios';

const API_BASE_URL = "http://localhost:8000/api"; // Aggiorna l'URL base dell'API

export default {
    props: {
        cart: Array
    },
    data() {
        return {
            name: '',
            last_name: '',
            address: '',
            email: '',
            mobile_phone: '',
            totalAmount: 0,
            orderStatus: true,
            customerForm: null
        };
    },

    mounted() {
        let button = document.querySelector('#submit-button');
        const self = this;

        braintree.dropin.create({
            authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
            selector: '#dropin-container'
        }, function (err, instance) {
            button.addEventListener('click', () => {
                self.createOrder();
            });
        });
    },
    methods: {

        createOrder() {
            this.customerForm = {
                name: this.name,
                last_name: this.last_name,
                address: this.address,
                email: this.email,
                mobile_phone: this.mobile_phone,
                total_amount: this.totalAmount.toFixed(2),
                order_status: this.orderStatus,
                restaurant_id: this.cart[0].restaurant_id
            };
        }
    }
}
</script>

<template>
    <div class="row justify-content-start">
        <div class="container-card">
            <div class="card">
                <div class="card-header p-3 text-center"><strong>Inserisci i dati per effettuare l'ordine</strong></div>

                <div class="card-body">
                    <form method="POST" class="form-group">

                        <div class=" justify-content-between flex-wrap">
                            <div class="form-group ">
                                <label for="name" class="col col-form-label text-md-right ">Nome</label>
                                <input id="name" type="text" class="form-control" name="name" v-model="this.name" required
                                    autofocus>
                            </div>
                            <div class="form-group mb-3">
                                <label for="last_name" class="col col-form-label text-md-right">Cognome</label>
                                <input id="last_name" type="text" class="form-control" name="last_name"
                                    v-model="this.last_name" required autofocus>
                            </div>
                            <div class="form-group mb-3">
                                <label for="address" class="col col-form-label text-md-right">Indirizzo</label>
                                <input id="address" type="text" class="form-control" name="address" v-model="this.address"
                                    required autofocus>
                            </div>
                            <div class=" form-group mb-3">
                                <label for="email" class="col col-form-label text-md-right">Email</label>
                                <input id="email" type="text" class="form-control" name="email" v-model="this.email"
                                    required autofocus>
                            </div>
                            <div class=" form-group mb-3">
                                <label for="mobile_phone" class="col col-form-label text-md-right">Cellulare</label>
                                <input id="mobile_phone" type="text" class="form-control " name="mobile_phone"
                                    placeholder="+39" v-model="this.mobile_phone" required autofocus minlength='10'
                                    maxlength='10'>

                            </div>
                        </div>

                        <div id="dropin-container"></div>
                        <router-link :to="{ name: 'thankYou', params: { customerForm: customerForm } }">
                            <div id="submit-button" class="button button--small button--green">
                                Invia ordine
                            </div>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
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
    border-radius: 30px;
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


.card {
    width: 60%;

}

.card-header {
    background-color: #00a082;
    color: #fff;
}



.container-card {
    display: flex;
    justify-content: center;
}
</style>
    