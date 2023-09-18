<script setup>

    //* Importaciones nativas
    import { defineAsyncComponent } from 'vue';

    //* Importación de componentes
    const LoginForm = defineAsyncComponent(() => import('../components/LoginForm.vue'));

</script>

<template>
    <div class="login-layout-container">
        <login-form></login-form>
    </div>
</template>

<style scoped>
    .login-layout-container {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
</style>