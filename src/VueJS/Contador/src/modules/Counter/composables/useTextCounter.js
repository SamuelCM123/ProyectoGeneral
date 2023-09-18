import { computed } from 'vue';

export const useTextCounter = (counter) => {
    const colorTexto = computed(() =>{
        if (counter.value > 0) return 'Positivo'
        else if(counter.value < 0) return 'Negativo'
        else if(counter.value === 0) return 'Neutral'
    })

    const esPrimo = computed(()=>{
        if (counter.value <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(counter.value); i++) {
            if (counter.value % i === 0) {
                return false;  
            }
        }

        return true; 
    })
    return {
        //* Properties

        //* Methods
        colorTexto,
        esPrimo
        
    }

}