<script setup>

    //* Definición de propiedades...
    const { btnDecrement, btnIncrement, btnReset } = defineProps({
        btnIncrement: { type: Function, required: true },
        btnDecrement: { type: Function, required: true },
        btnReset    : { type: Function, required: true }
    });

</script>

<template>
    <div class="controls-wrapper">
        <button @click="btnIncrement" class="btn btn-increment">+</button>
        <button @click="btnDecrement" class="btn btn-decrement">-</button>
        <button @click="btnReset" class="btn btn-reset">0</button>
    </div>
</template>

<style scoped> @import url('../css/buttons-counter.css'); </style>