const diAlgo = (texto) => console.log(texto);

diAlgo("hola");

setTimeout(()=> diAlgo("pasaron 5 segundos"), 5000);

console.log("terminado?");

setTimeout(()=> {diAlgo("pasaron 4 segundos");
console.log("ahora si, terminado");
}, 5000);


const miPromesa = new Promise( (resolve, reject) => {
    const proceso = true;
    if(proceso){
        setTimeout( ()=>diAlgo("exito en 2 segundos"), 2000 );
    }else{
        reject("error")
    }
} );

// miPromesa
//     .then(mensaje => console.log(mensaje)) //si anduvo bien, ejecuta .then
//     .catch(error=>console.log(error)); //si anduvo mal, ejecuta .catch

    async function unProceso(){
        try{
            console.log(await miPromesa);
        }catch(error){
            console.log(error);
        }
    }

    await unProceso();
    console.log("Terminado");