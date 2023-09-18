import * as UI from "./UI.js";
const mainContainer = document.querySelector('.main-container')
const inputs = document.querySelectorAll('.container-group_div_input');

UI.asignarValorP()

mainContainer.addEventListener('change', (e) => {
    let colores = [];

    inputs.forEach(input=>{
        let inputP = input.nextElementSibling;
        
        // Asignar texto a etiqueta P
        inputP.textContent = input.value;

        // Agregar un valor en una nueva posicion en el arreglo colores
        colores.push(input.value);
    })

    UI.asignarColor(colores,mainContainer);
});

