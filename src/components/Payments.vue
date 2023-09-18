<script>
import axios from 'axios';

const API = "http://localhost:8000/api/v1"


export default {
    name: 'Payments',
    props: {
        cart: Array
    },
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
        const self = this;

        braintree.dropin.create({
            authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
            selector: '#dropin-container'
        }, function (err, instance) {
            button.addEventListener('click', function (cart) {
                instance.requestPaymentMethod(function (err, payload) {
                    console.log("Payment Method Nonce received:", payload.nonce);

                    self.calculateTotal(self.cart);

                    const dati = {
                        total_amount: self.totalAmount,
                        order_status: self.orderStatus,
                    };

                    axios.post(API + '/save_payments', {
                        dati: dati
                    })
                        .then(response => {
                            console.log(response.data.messaggio);
                            // Esegui altre azioni dopo il salvataggio
                        })
                        .catch(error => {
                            console.error('Errore durante il salvataggio dei dati:', error);
                        });
                });
            });
        });
    },
    methods: {
        calculateTotal(cart) {
            if (cart && Array.isArray(cart) && cart.length > 0) {
                this.totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
            } else {
                this.totalAmount = 0;
            }
        }
    }

}
</script>

        
<template>
    <div id="dropin-container"></div>
    <button id="submit-button" class="button button--small button--green">Purchase</button>
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
    