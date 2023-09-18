<script setup>
    //* Imporataciones Nativas
    import { defineAsyncComponent,computed } from 'vue';

    //* Importaciones Locales
    import { useCounter } from './modules/Counter/composables/useCounter';
    import { useTextCounter } from './modules/Counter/composables/useTextCounter';

    //* Importación de componente con lazy loading
    const ShowCounter = defineAsyncComponent(() => import('./modules/Counter/components/ShowCounter.vue'));
    const ButtonsCounter = defineAsyncComponent(() => import('./modules/Counter/components/ButtonsCounter.vue'));
    const TextCounter = defineAsyncComponent(() => import('./modules/Counter/components/TextCounter.vue'));

    //* Composables
    const { btnDecrement, btnIncrement, btnReset, counter } = useCounter();
    const { colorTexto, esPrimo } = useTextCounter(counter);

</script>

<template>
    <div class="main-container">
        <h1 class="title">Contador de Clicks</h1>

        <!-- Componente contador -->
        <show-counter
            :es-primo="esPrimo"
            :color-counter="colorTexto"
            :counter="counter"></show-counter>

        <!-- Componente de acciones del contador -->
        <buttons-counter
            :btn-decrement="btnDecrement"
            :btn-increment="btnIncrement"
            :btn-reset="btnReset"></buttons-counter>

        <!-- Componente de texto -->
        <text-counter 
            :es-primo="esPrimo"
            :color-texto="colorTexto"
            :number-counter="counter"></text-counter>
    </div>
</template>

<style scoped>
    .main-container {
        min-width: 100%;
        min-height: 100vh;
        padding: 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    .title {
        font-size: 30px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
</style>