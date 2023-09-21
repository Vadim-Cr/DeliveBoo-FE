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
  <div v-if="$route.name === 'home'">
    <AppHero />
  </div>
  <div>
    <router-view></router-view>
  </div>
  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

.fa-cart-shopping {
  color: $green-color;
  font-size: 1.5rem;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1000;
}
</style>
