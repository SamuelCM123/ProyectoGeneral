<script setup>

    //* Importaciones nativas
    import { defineAsyncComponent } from 'vue';

    const RegisterForm = defineAsyncComponent(() => import('../components/RegisterForm.vue'));
</script>

<template>
    <div class="register-layout-container">
        <register-form></register-form>
    </div>
</template>

<style scoped>
    .register-layout-container{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
</style>