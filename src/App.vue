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
  </div>
</template>

<style scoped></style>
