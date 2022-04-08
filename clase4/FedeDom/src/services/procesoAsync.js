const diAlgo = (texto) => console.log(texto);


//MENSAJE DE TERMINADO Y LUEGO DE 5 SEGUNDOS
setTimeout(() => diAlgo("Pasaron 5 segundos"),5000);

console.log(terminado);


//MENSAJE DE 5 SEGUNDOS Y LUEGO TERMINADO
setTimeout(() => {
    diAlgo("Pasaron 5 segundos");   
    console.log(terminado);
},5000);