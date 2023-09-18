<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <div class="container-header">
        <h1>Deliveboo
            <i class="fa-solid fa-location-dot"></i>
        </h1>
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
</style>