<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <div class="container-header">
        <router-link to="/" class="text-decoration-none">
            <h1>Deliveboo
                <i class="fa-solid fa-location-dot"></i>
            </h1>
        </router-link>
        <a v-if="$route.name === 'home'" href="http://127.0.0.1:8000/register"
            class="registerBtn rounded-pill text-decoration-none">
            Registrati
        </a>
        <router-link v-if="$route.name !== 'cart' && $route.name !== 'home'" to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

h1 {
    color: $second-color;
    font-weight: 900;
    padding: 10px;
}

.fa-location-dot {
    font-size: 2.2rem;
    position: relative;
    top: -2px;
    left: -10px;
}

.registerBtn {
    padding: 12px;
    background-color: $second-color;
    font-size: 1.1rem;
    color: #fff;

    &:hover {
        box-shadow: 3px 5px 5px #fff;
    }
}
</style>