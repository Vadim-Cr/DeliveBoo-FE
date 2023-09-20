<script>
export default {
    name: 'AppHero'
}
</script>
<template>
    <div class="hero">
        <div class="hero-img burger">
            <img src="/public/burger-hero.jpg" alt="">
        </div>
        <div class="hero-text">
            <h2>
                <strong>
                    Deliveboo , il piacere del cibo senza uscire di casa
                </strong>
            </h2>

        </div>
        <div class="hero-img sushi">
            <img src="/public/sushi-hero.png" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

.hero {
    height: 600px;
    background-color: $bg-color;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;


    .hero-img {
        width: 40%;
        z-index: 998;
        //   position: absolute;
        //   top: 0;
        //   left: 40%;

        img {
            object-fit: cover;
            height: 715px;
            width: 715px;
            border-radius: 50%;
            padding: 0 -30px;

        }
    }

    .burger {
        position: relative;
        left: -300px;

    }

    .sushi {
        position: relative;
        right: -200px;

    }

    .hero-text {
        z-index: 1000;
        text-align: center;
        color: $green-color;
        font-size: 1.4rem;

        h2 {
            font-size: 3rem;

        }

    }
}
</style>