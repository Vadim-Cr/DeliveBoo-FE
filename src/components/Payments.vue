<script>
import axios from 'axios';



export default {
    props: ['cart'],
    data() {
        return {
            totalAmount: 0
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
        var button = document.querySelector('#submit-button');

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
            // Qui va il tuo codice per processare il pagamento con Braintree
            // Una volta che il pagamento è stato processato con successo, esegui la chiamata Axios
            this.saveOrder();
        },
        saveOrder() {
            axios.post('/api/orders', {
                // I tuoi dati dell'ordine qui
            })
                .then(response => {
                    // Gestisci la risposta del server
                })
                .catch(error => {
                    // Gestisci l'errore
                });
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
  