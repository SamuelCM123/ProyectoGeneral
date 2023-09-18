export const cambiarCita = (elemento,citasMotivacionales) => {
    let citaRandom = Math.floor(Math.random()*citasMotivacionales.length)
    elemento.textContent = citasMotivacionales[citaRandom].cita
}