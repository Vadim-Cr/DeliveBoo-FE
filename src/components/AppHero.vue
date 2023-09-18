<script>
export default {
    name: 'AppHero'
}
</script>
<template>
    <div class="hero">
        <div class="hero-img">
            <img src="/public/pasta-hero.png" alt="">
        </div>
        <div class="hero-text">
            <h2>
                <strong>Deliveboo , il piacere del cibo senza uscire di casa</strong>
            </h2>
        </div>
    </div>
    <svg class="waves" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="#ffc244">
        </path>
    </svg>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

.hero {
    height: 400px;
    background-color: $bg-color;
    padding-top: 10px;

    .hero-img {
        width: 20%;
        position: relative;
        top: 0;
        left: 40%;

        img {
            width: 100%;
        }
    }

    .hero-text {
        z-index: 1000;
        text-align: center;
        font-weight: 900;


        h2 {
            width: 30%;
            margin: 0 auto;
        }

    }
}

.waves {
    transform: rotate(180deg);
}
</style>