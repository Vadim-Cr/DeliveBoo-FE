<script>
</script>

<template>
  <div>
    <router-link v-if="$route.name !== 'home'" to="/">Torna alla lista</router-link>
    <router-link v-if="$route.name !== 'cart'" to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

.fa-cart-shopping {
  color: orangered;
  font-size: 2rem;
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
