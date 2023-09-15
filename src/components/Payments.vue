<script>
import axios from 'axios';

const API = "http://localhost:8000/api/v1"


export default {
    props: ['cart'],
    data() {
        return {
            totalAmount: 0,
            orderStatus: true,
            braintreeInstance: null,
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
        let button = document.querySelector('#submit-button');

        braintree.dropin.create({
            authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
            selector: '#dropin-container'
        }, function (err, instance) {
            button.addEventListener('click', function () {
                instance.requestPaymentMethod(function (err, payload) {
                    console.log("Payment Method Nonce received:", payload.nonce);
                });
            });
        });
    },
    // ... (il tuo codice esistente)
    methods: {
        calculateTotal(cart) {
            if (cart && Array.isArray(cart) && cart.length > 0) {
                this.totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
            } else {
                this.totalAmount = 0;
            }
        },
        processPayment() {
            let button = document.querySelector('#submit-button');
            let self = this; // Mantieni un riferimento all'istanza Vue

            braintree.dropin.create(
                {
                    authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
                    selector: '#dropin-container',
                },
                function (err, instance) {
                    button.addEventListener('click', function () {
                        instance.requestPaymentMethod(function (err, payload) {
                            console.log("Payment Method Nonce received:", payload.nonce);

                            // Dopo aver ricevuto il nonce del pagamento, chiama inviaDati() per inviare i dati al backend
                            self.inviaDati(payload.nonce);
                        });
                    });
                }
            );
        },
        inviaDati(paymentNonce) {
            if (isNaN(this.totalAmount) || this.totalAmount <= 0) {
                console.error('Il totale non è un numero valido o è inferiore o uguale a zero.');
                return;
            }

            const dati = {
                total_amount: this.totalAmount,
                order_status: this.orderStatus,
            };

            this.saveOrder(dati); // Chiamata a saveOrder() con i dati del pagamento
            console.log("Dati inviati:", dati);
        },
        saveOrder(dati) {
            axios.post(API + '/save_payments', dati)
                .then(response => {
                    console.log(response.data.messaggio);
                    // Esegui altre azioni dopo il salvataggio
                })
                .catch(error => {
                    console.error('Errore durante il salvataggio dei dati:', error);
                });
        },
    }

}
</script>

    
<template>
    <div id="dropin-container"></div>
    <button id="submit-button" class="button button--small button--green" @click="inviaDati()">Purchase</button>
    <h2>
        Il totale da pagare è: €{{ totalAmount.toFixed(2) }}
    </h2>
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
  