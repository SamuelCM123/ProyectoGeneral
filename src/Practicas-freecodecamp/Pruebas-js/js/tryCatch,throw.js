const numPiezas = 5;
const probError = 0.25;
let correctas = 0;
let defectuosas = 0;

const comprobarSiEsDefectuosa = () => Math.random() < probError

class ErrorPiezaDefectuosa extends Error{}
class ErrorCadenaParada extends Error{}

for(let i=1; i<=numPiezas; i++){
    const esDefectuoso = comprobarSiEsDefectuosa();

    try{
        try {
            if(i == 2) throw new ErrorCadenaParada('Se paro la cadena')
            //El throw llega al catch por la variable "error "
            if(esDefectuoso) throw new ErrorPiezaDefectuosa('Pieza defectuosa');
            correctas++
        } catch (error) {
            if(error instanceof ErrorCadenaParada) {
                console.log(`Se ha parado la cadena ${i}`);
                throw error;
            };
            if(error instanceof ErrorPiezaDefectuosa) console.log(`La pieza ${i} es defectuosa`);
            defectuosas++
        }
    //     finally{
    //         console.log(`Fabricando pieza ${i}`);
    //     }
    }
    catch(ex){
        console.log('Hemos llegado aqui');
    }
}

console.log(`Fabricadas: ${numPiezas}`);
console.log(`->Correctas: ${correctas}`);
console.log(`->Defectuosas: ${defectuosas}`);