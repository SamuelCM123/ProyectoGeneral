<script setup>
    //* Importación de composables
    import { useRegister } from '../composables/useRegister';

    //* Desestructuraciones
    const { email, errorMessage, isError, password,confirmPassword, submitRegister } = useRegister();
</script>
<template>
    <div>
        <h1 class="title">Registrarse</h1>
    <br>
    <form @submit.prevent="submitRegister" class="form">
        <!-- Input de correo electrónico -->
        <div class="form-group">
            <label for="label-email" class="form-label">Correo Electrónico</label>
            <div class="form-input-wrapper">
                <span class="material-symbols-outlined form-icon">person</span>
                <input type="email" v-model="email" placeholder="Ingrese correo electrónico" class="form-input" id="label-email">
            </div>
        </div>

        <!-- Input de contraseña -->
        <div class="form-group">
            <label for="label-pwd" class="form-label">Contraseña</label>
            <div class="form-input-wrapper">
                <span class="material-symbols-outlined form-icon">lock</span>
                <input type="password" v-model="password" placeholder="Ingrese contraseña" class="form-input" id="label-pwd">
            </div>
        </div>

        <!-- Input de confirmacion de contraseña -->
        <div class="form-group">
            <label for="cnfpwd" class="form-label">Confirmación de contraseña</label>
            <div class="form-input-wrapper">
                <span class="material-symbols-outlined form-icon">lock</span>
                <input type="password" v-model="confirmPassword" placeholder="Ingrese confirmación de contraseña" class="form-input" id="label-cnfpwd">
            </div>
        </div>

        <!-- Renderización de errores -->
        <div class="form-group">
            <p v-if="isError" class="error-message">{{ errorMessage }}</p>
        </div>

        <!-- Submit -->
        <div class="form-group">
            <button class="btn-submit">Registrar</button>
        </div>
    </form>
    <div>
        <router-link :to="{ name: 'login' }" class="btn-submit">Volver</router-link>
    </div>
    </div>
</template>
<style scoped>
@import url('../css/login-form.css');
</style>