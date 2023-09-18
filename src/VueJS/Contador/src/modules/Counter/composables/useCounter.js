import { ref } from 'vue';

export const useCounter = () => {

    const counter = ref(0);

    return {
        //* Properties
        counter,

        //* Methods
        btnIncrement: () => counter.value++,
        btnDecrement: () => counter.value--,
        btnReset: () => counter.value = 0,
    }

}