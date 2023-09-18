<script setup>
    //* Definición de propiedades...
    const { counter,colorCounter, esPrimo } = defineProps({
        counter: { type: Number, required: true },
        colorCounter:{ type:Function, required: true},
        esPrimo:{type:Function,required:true}
    });
</script>

<template>
    <p class="counter">
        Conteo de Clicks: 
        <span :class="esPrimo ? 'primo':colorCounter">{{ counter }}</span>
    </p>
</template>

<style scoped> @import url('../css/show-counter.css'); 
    .Positivo {
    color: rgb(0, 255, 0);
    }

    .Negativo {
    color: red;
    }

    .Neutro{
        color: gray;
    }

    .primo{
        color: blue;
    }
</style>