const facturas = [
    {
        precio: 23,
        cantidad: 1,
    },
    {
        precio: 19,
        cantidad: 2,
    },
    {
        precio: 14,
        cantidad: 4,
    },
    {
        precio: 22,
        cantidad: 1,
    },
]

const IVA = 1.21;

//1- Se realiza una operacion entre los atributos de los distintos objetos y este devuelve un array
const totalFacturas = facturas.map(factura => factura.precio * factura.cantidad * IVA);
console.log("Map ", totalFacturas);

//2-Se imprimen las operaciones de map junto con su indice
totalFacturas.forEach((totalFactura, index) => {
    console.log('foreach-map ', index, totalFactura);
})

// REDUCE transforma un array de valores como sumar un array entero
const total = totalFacturas.reduce((a, b) => a + b);
console.log("Reduce ", total);

//1- Se realiza una operacion entre los atributos de los distintos objetos y este devuelve un array, despues con el REDUCE toma el array de valores y los suma
const totalTemp = facturas.map(factura => factura.precio * factura.cantidad * IVA).reduce((a, b) => a + b);
console.log("Map-Reduce ", totalTemp);