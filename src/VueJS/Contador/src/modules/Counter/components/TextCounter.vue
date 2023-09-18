<script setup>
    const props = defineProps({
        numberCounter:{
            type: Number,
            required: true
        },
        colorTexto:{
            type: Function,
            required: true
        },
        esPrimo:{
            type: Function,
            required: true
        }
    })
</script>

<template>
    <div>
        <h3 :class="props.colorTexto">El número {{ props.numberCounter }} es {{ props.colorTexto }}</h3>
        <h3 v-if="esPrimo" class="primo">!Numero Primo!</h3>
    </div>
</template>

<style scoped>
.Positivo {
    color: rgb(0, 255, 0);
}

.Negativo {
    color: red;
}

.Neutral{
    color: gray;
}

.primo{
    color: blue;
}
</style>