<!-- components/ThankYou.vue -->

<template>
    <div class="mt-5 container">
        <p>Questo è il tuo riepilogo:</p>
        <!-- <ul>
            <li>name: {{ customerForm.name }}</li>
            <li>last_name: {{ customerForm.last_name }}</li>
            <li>address: {{ customerForm.address }}</li>
            <li>email: {{ customerForm.email }}</li>
            <li>mobile_phone: {{ customerForm.mobile_phone }}</li>
            <li>totalAmount: {{ customerForm.totalAmount }}</li>
            <li>orderStatus: {{ customerForm.orderStatus }}</li>
            
        </ul> -->
        <h1>Grazie per il tuo acquisto</h1>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            customerForm: {}
        };
    },
    mounted() {
        this.customerForm = this.$route.params.customerForm;
    }
};
</script>
  