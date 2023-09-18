const inputs = document.querySelectorAll('.container-group_div_input');

export const asignarValorP = () =>{
    inputs.forEach(input=>{
        let valorInput = input.value;
        let p = input.nextElementSibling;
    
        p.textContent = valorInput
        console.log(p);
    });
}

export const asignarColor = ( rgb, elemento) =>{
    console.log(rgb);
    elemento.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]},${rgb[2]})`;
}