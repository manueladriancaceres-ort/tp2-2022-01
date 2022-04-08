const miPromesa = new Promise((resolve,reject) => {
    setTimeout(()=> resolve("Exito en 2 segundos"),2000);
});
//miPromesa.then(mensaje=>console.log(mensaje));

async function unProceso(){
    console.log(await miPromesa);
}
await unProceso();
console.log("terminado");