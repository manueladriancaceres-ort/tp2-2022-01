var variable = 10;

var variable = "algo"
var variable = true;

console.log(variable);

// recomendable usar let

let unaVariable = true;
//  let unaVariable = true; let para evitar cambio de tipo de dato

const UNA_VARIABLE_DOS = 10;

    // UNA_VARIABLE_DOS = 15; esto da error, no se pueden pisar las constantes

const lista = [4,5,2,24,2];
const miLista = lista;

miLista[0] = 1000;

console.log(lista)
console.log(miLista)

function calcular(listaParametro){
    lista[2] = 300;
}

calcular(lista);
console.log(lista)
console.log(miLista)

//
// Programacion funcional
// map, filter, reduce - > devuelven un nuevo array
//

// Los string son inmutables - > let palabra. No se puede -> palabra[0] = 12

lista[1] = 'cualquier cosa';

console.log(lista);

let probarString = '123456'

probarString[1] = 9;

console.log(probarString)