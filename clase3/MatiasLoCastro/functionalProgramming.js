//
// Functional programming
// No modificar variables publicas
// No modificar objetos o listas pasados por parametros
// Si se modifican se llama mutacion
//

const unaLista = [4,33,5,6,7,8];

const listaFiltrada = unaLista.filter( numero => numero >= 8);

console.log(listaFiltrada)

const listaSumaUnoACadaElemento = unaLista.map(numero => numero + 1)
console.log(listaSumaUnoACadaElemento)

const totalDeLaLista = unaLista.reduce( (suma,numero) => (suma+numero),0 );
console.log(totalDeLaLista)

