<script>
</script>

<template>
  <div>
    <router-link v-if="$route.name !== 'home'" to="/">Torna alla lista</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
