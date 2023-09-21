<script>
export default {
    name: 'AppHero'
}
</script>
<template>
    <div class="hero">
        <div class="hero-img burger none">
            <img src="/public/burger-hero.jpg" alt="">
        </div>
        <div class="hero-text col-5">
            <h2>
                <strong>
                    Deliveboo , il piacere del cibo senza uscire di casa
                </strong>
            </h2>

        </div>
        <div class="hero-img sushi none">
            <img src="/public/sushi-hero.png" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

.hero {
    width: 100vw;
    overflow: hidden;
    height: 600px;
    background-color: $bg-color;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


    .hero-img {
        z-index: 998;

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
    }

    .sushi {
        position: relative;
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

@media (max-width: 991px) {
    .sushi {
        display: none;
    }

    .burger {
        margin-left: -400px;
    }
}

@media (max-width: 768px) {

    .sushi,
    .burger {
        display: none;
    }

    .hero-text {
        font-size: 3rem;
        font-weight: bolder;
        width: 80vw;
    }
}
</style>