<template>
    <div class="loading-overlay" v-if="isLoading">
        <!-- Aggiungi il tuo stile CSS per il caricamento qui -->
        <div class="loading-spinner"></div>
    </div>

    <div class="content" v-else>
        <div class="container-fluid">
            <h1 class="text-center">
                Grazie per il tuo acquisto
                <i class="fa-solid fa-location-dot"></i>
                <div class="link">
                    <router-link to="/">
                        Torna alla home
                    </router-link>
                </div>
            </h1>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isLoading: true
        };
    },
    mounted() {
        // Simula il caricamento per 2.5 secondi
        setTimeout(() => {
            this.isLoading = false;
        }, 2500);
    },
};
</script>
  
<style lang="scss" scoped>
@use './../styles/partials/variables' as *;

.container-fluid {
    padding-top: 185px;
    height: calc(100vh - 470px);
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: $green-color;
        font-size: 4rem;

        .link {
            font-size: 1.8rem;
        }
    }
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffc244;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner {
    /* Aggiungi qui lo stile CSS per il tuo caricamento */
    /* Aggiorna le dimensioni a 100px */
    border: 8px solid rgba(255, 255, 255, 0.3);
    border-top: 8px solid #333;
    border-radius: 50%;
    width: 100px;
    /* Imposta le dimensioni desiderate */
    height: 100px;
    /* Imposta le dimensioni desiderate */
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
  