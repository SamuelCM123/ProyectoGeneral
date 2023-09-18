import { ref } from 'vue';

export const useRegister = () => {

    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('')
    const isError = ref(false);
    const errorMessage = ref('');

    const submitRegister = () => {

        try {

            // throw 'Credenciales no válidas';

            console.log('INFO_LOGIN: ', {
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value
            });

        } catch (error) {

            console.error(`Ha ocurrido un error [ERROR_LOGIN]: ${ error }`);
            isError.value = true;
            errorMessage.value = `${ error }`;

        }

    }

    return {
        //* Properties
        email, password,confirmPassword,
        isError, errorMessage,

        //* Methods
        submitRegister
    }

}