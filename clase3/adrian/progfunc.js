//
// Programacion funcional
//
// no modificar variables publicas
// no midificar objetos o listas pasadas por parametros
// si se modifican se llama mutacion
//

const unaLista = [4,33,5,6,7,8];

/*
const lista
unaFuncion = function(numero) {

    for() {
        if () {
            lista.push()    
        } 
    }
}
*/

const listafiltrada = unaLista.filter( numero => numero >= 8 );
console.log(listafiltrada);

const listaSumaUnoAcadaElemento = unaLista.map( numero => numero + 100 );
console.log(listaSumaUnoAcadaElemento);

const totalDeLaLista = unaLista.reduce(  (acumulardor,numero) => (acumulardor+numero), 0 );
console.log(totalDeLaLista);

/* similar
let acumulardor = 0;
for (let i = 0; i < unaLista.length; i++) {
    acumulardor += unaLista[i];    
}
*/

console.log(unaLista);

// 
// no quiero mutar la lista
// unaLista.sort();
// console.log(unaLista);
//

function nuevaListaOrdenada(unaLista) {
    const listaNueva = [...unaLista];
    listaNueva.sort( (a,b) => a - b );
    return listaNueva;
}

console.log(nuevaListaOrdenada(unaLista));


const listaClientes = [
    {codigo:12,nombre:"Juan"},
    {codigo:1,nombre:"Pedro"},
    {codigo:4,nombre:"Carlos"},
]

console.log(listaClientes.sort( (a,b) => a.codigo - b.codigo  )  );

console.log(listaClientes.sort( (a,b) => a.codigo - b.codigo  )  );

console.log(listaClientes.sort( (a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }));
  