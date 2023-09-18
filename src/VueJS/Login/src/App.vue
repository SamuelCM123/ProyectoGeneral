<script setup>
    
</script>

<template>
    <div class="main-container">
        <!-- Renderización de enrutador principal -->
        <router-view></router-view>
    </div>
</template>

<style scoped>
    .main-container {
        /* background-color: lightcoral; */
        min-width: 100%;
        min-height: 100vh;
        padding: 25px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

</style>