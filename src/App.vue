<script>
</script>

<template>
  <div>
    <router-link v-if="$route.name !== 'home'" to="/">
      <div class="m-3">
        <i class="fa-solid fa-angles-left"></i>
        Torna alla home
      </div>
    </router-link>
    <router-link v-if="$route.name !== 'cart'" to="/cart"><i class="fa-solid fa-cart-shopping"></i></router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.fa-cart-shopping {
  color: orangered;
  font-size: 2rem;
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
