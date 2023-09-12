<script>
import RestaurantCard from './components/RestaurantCard.vue';
import TestQueryRestaurants from './components/TestQueryRestaurants.vue';

export default {
  components: {
    RestaurantCard,
    TestQueryRestaurants
  },
}
</script>

<template>
  <div>
    <TestQueryRestaurants />
    <!-- <RestaurantCard /> -->
    <router-link v-if="$route.name !== 'home'" to="/">Torna alla lista</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
