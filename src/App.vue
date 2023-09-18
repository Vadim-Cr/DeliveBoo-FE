<script>
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppHero,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppHero />
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
  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

.fa-cart-shopping {
  color: $second-color;
  font-size: 1.5rem;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1000;
}
</style>
