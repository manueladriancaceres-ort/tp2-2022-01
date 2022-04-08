const miPromesa = new Promise((resolve,reject) => {
    setTimeout(()=> resolve("Exito en 2 segundos"),2000);
});
miPromesa.then(mensaje=>console.log(mensaje));

console.log("terminado");