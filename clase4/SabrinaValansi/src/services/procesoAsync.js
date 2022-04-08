const diAlgo = (texto) => console.log(texto);

/*  ES COMO HACER
function diAlgo(texto){
    console.log(texto);
}
diAlgo("hola");
*/
diAlgo("hola");

setTimeout(()=> diAlgo("pasaron 5 segundos"),5000);
setTimeout(()=> diAlgo("pasaron 2 segundos"),2000);
setTimeout(()=> diAlgo("pasaron 1 segundos"),1000);
console.log("terminado");