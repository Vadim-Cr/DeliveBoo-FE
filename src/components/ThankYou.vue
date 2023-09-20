<script>
export default {
    data() {
        return {
            customerForm: {}
        };
    },
    beforeRouteEnter(to, from, next) {
        // Accedi ai dati dai parametri dell'URL
        const customerForm = to.params.customerForm;

        // Passa i dati a next()
        next(vm => {
            vm.customerForm = customerForm;
        });
    },
    mounted() {
        // Ora i dati dovrebbero essere disponibili
        console.log(this.customerForm);
    }
};
</script>


<template>
    <div class="mt-5 container">
        <p>Questo è il tuo riepilogo:</p>
        <ul v-if="customerForm">
            <li>name: {{ customerForm.name }}</li>
            <li>last_name: {{ customerForm.last_name }}</li>
            <li>address: {{ customerForm.address }}</li>
            <li>email: {{ customerForm.email }}</li>
            <li>mobile_phone: {{ customerForm.mobile_phone }}</li>
            <li>totalAmount: €{{ customerForm.total_amount }}</li>
            <li>orderStatus: {{ customerForm.order_status }}</li>
        </ul>
        <h1>Grazie per il tuo acquisto</h1>
    </div>
</template>

