const button = document.querySelector('.container-group_button');
const color = document.querySelector('.container-group_p');
const mainContainer = document.querySelector('.main-container')

button.addEventListener('click',()=>{
    let colorHex = generarColorHexadecimal();

    mainContainer.style.backgroundColor = colorHex
    color.innerText = colorHex
});

const generarColorHexadecimal = ()=>{
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random()*16);      
        console.log(indiceAleatorio);  
        colorHex += digitos[indiceAleatorio];
    }
    console.log(colorHex);
    return colorHex
}