const simple = (tarea) =>  console.log(tarea);

const pesada = (tarea) =>{
    console.log(`Empezando la tarea ${tarea}`);

    for(let i = 0; i<1000000; i++){
        Math.random() - Math.random() * Math.random();
    }

    console.log(`Termina la tarea ${tarea} `);
}

const tareaPablo = (tarea,callback,tiempo) => {
    console.log(tarea);
    setTimeout(callback,tiempo);
}

const tareas = [
    () => simple(`Escribir guions`),
    () => tareaPablo(`Hace miniatura`, () => simple(`->Revisar la miniatura`),2000),
    () => pesada(`Grabar video`),
    () => tareaPablo(`Editar video`,()=> simple(`->Revisar video`),5000)
]

// console.log(tareas);
for(const tarea of tareas) tarea();