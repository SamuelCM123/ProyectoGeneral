<script setup>
    
</script>

<template>
    <div class="error-container">
        <h1 class="title">Página No Encontrada</h1>
        <p class="description">Error | 404</p>
        <router-link :to="{ name: 'login' }" class="btn-back">Volver</router-link>
    </div>
</template>

<style scoped>

    .description, .btn-back { margin-top: 20px; }
    .description { text-align: center; }

    .btn-back {
        width: 100%;
        height: 45px;
        border-radius: 8px;
        cursor: pointer;
        background-color: #34495E;
        color: #FFFFFF;
        letter-spacing: 5px;
        text-transform: uppercase;
        transition: background-color .5s ease;
        display: grid;
        place-items: center;
    }
    .btn-back:hover {
        outline: 2px solid #34495E;
        background-color: transparent;
        color: #34495E;
    }
</style>