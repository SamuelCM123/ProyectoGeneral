import { citasMotivacionales } from "./citas.js";
import { cambiarCita } from "./UI.js";

const buttonSiguiente = document.querySelector('.div-group_div_button');
const pCita = document.querySelector('.div-group_div_p')

buttonSiguiente.addEventListener('click', () => {
    cambiarCita(pCita,citasMotivacionales);
})

cambiarCita(pCita,citasMotivacionales)