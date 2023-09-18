import { ref } from 'vue';

export const useLogin = () => {

    const email = ref('');
    const password = ref('');
    
    const isError = ref(false);
    const errorMessage = ref('');

    const submitLogin = () => {

        try {

            // throw 'Credenciales no válidas';

            console.log('INFO_LOGIN: ', {
                email: email.value,
                password: password.value
            });

        } catch (error) {

            console.error(`Ha ocurrido un error [ERROR_LOGIN]: ${ error }`);
            isError.value = true;
            errorMessage.value = `${ error }`;

        }

    }

    return {
        //* Properties
        email, password,
        isError, errorMessage,

        //* Methods
        submitLogin
    }

}