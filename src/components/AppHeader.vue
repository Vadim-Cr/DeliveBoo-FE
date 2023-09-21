<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <div class="container-header">
        <router-link to="/" class="text-decoration-none">
            <h1>Deliveboo <i class="fa-solid fa-location-dot"></i></h1>
        </router-link>
        <a v-if="$route.name === 'home'" href="http://127.0.0.1:8000/register"
            class="registerBtn rounded-pill text-decoration-none">
            Registrati
        </a>
        <router-link v-if="$route.name !== 'cart' && $route.name !== 'home' && $route.name !== 'thankYou'" to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
        </router-link>
    </div>
</template>
  
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

.container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: $bg-color;

    h1 {
        color: $green-color;
        font-weight: 900;
        font-size: 2.5rem;
        margin: 0;
    }

    .fa-location-dot {
        font-size: 1.5rem;
        position: relative;
        top: -2px;
        left: -5px;
    }

    .registerBtn {
        padding: 8px 16px;
        font-size: 1rem;
        color: #fff;
        background-color: $green-color;

        &:hover {
            box-shadow: 3px 5px 5px #fff;
        }
    }

    @media (max-width: 768px) {


        h1 {
            font-size: 1.5rem;

        }

        .fa-location-dot {
            font-size: 1rem;

        }

        .registerBtn {
            padding: 6px 12px;

            font-size: 0.9rem;

        }
    }
}
</style>
  