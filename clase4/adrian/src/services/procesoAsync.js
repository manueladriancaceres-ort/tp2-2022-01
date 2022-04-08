
/*
function diAlgo(texto) {
    console.log(texto);
}
diAlgo("Hola");
*/

/*
const diAlgo = (texto) => console.log(texto);
setTimeout(()=> diAlgo("Pasaron 5 segundos"),5000);
setTimeout(()=> diAlgo("Pasaron 2 segundos"),2000);
setTimeout(()=> diAlgo("Pasaron 1 segundos"),1000);
*/

/*
const diAlgo = (texto) => console.log(texto);
setTimeout(()=> {
    diAlgo("Pasaron 5 segundos");
    console.log("Terminado");
},5000);
*/

const miPromesa = new Promise( (resolve,reject) => {
    const proceso = true;
    if(proceso) {
        setTimeout(()=> resolve("Exito en 2 segundos"),2000); 
    } else {
        reject("Error");
    }
} )

/*
miPromesa
    .then(mensaje=>console.log(mensaje))
    .catch(error=>console.log(error));
*/


async function unProceso() {
    try{
        console.log(await miPromesa);
    } catch(error) {
        console.log(error);
    }
}

await unProceso();
console.log("Terminado");




