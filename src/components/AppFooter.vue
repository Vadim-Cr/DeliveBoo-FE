<script>
export default {
    name: 'AppFooter'
}
</script>
<template>
    <svg class="waves" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
            d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
            fill="#1d1d1d">
        </path>
    </svg>
    <div class="footer">
        <h2>Deliveboo
            <i class="fa-solid fa-location-dot"></i>
        </h2>

        <div class="details-footer">
            <div>
                <h5>CHI SIAMO</h5>
                <ul>
                    <li><a href="#">Informazioni</a></li>
                    <li><a href="#">Storia</a></li>
                    <li><a href="#">Valori</a></li>
                </ul>
            </div>
            <div>
                <h5>CREATORS</h5>
                <li><a href="#">Alessandra Spalla</a></li>
                <li><a href="#">Giulia Bruno</a></li>
                <li><a href="#">Vadim Crudu</a></li>
                <li><a href="#">Simone Saladino</a></li>
                <li><a href="#">Zakaria El Haoudi</a></li>
            </div>
            <div>
                <h5>CONTATTI</h5>
                <li>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                </li>
            </div>
            <div>
                <h5>NOTE LEGALI</h5>
                <li>
                    <a href="#">Termini & Condizioni</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
                <li>
                    <a href="#">Cookies</a>
                </li>
            </div>
        </div>

        <h6>Copyright © 2023 Deliveboo Tutti i diritti riservati</h6>
    </div>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;


a {
    text-decoration: none;
    color: #fff;
}

.waves {
    margin-top: 70px;
}

.footer {
    color: #fff;
    height: 300px;
    background-color: #1d1d1d;
    padding: 10px;
    padding-left: 20px;
    position: relative;

    h2 {
        position: relative;
        margin-top: -30px;
        color: $green-color;
    }

    .details-footer {
        display: flex;
        justify-content: space-around;
        padding-top: 30px;

        ul {
            padding-left: 0;

        }

        li {
            list-style-type: none;

            i {
                margin: 0 5px;
                font-size: 1.4rem;

            }
        }

    }

    h6 {
        position: absolute;
        bottom: 15px;
        left: 20px;
    }
}
</style>