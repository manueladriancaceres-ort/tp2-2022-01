var variable = 10;

var variable = "algo";
var variable = true;

console.log(variable);

// recomendable usar let

let unaVariable = 10;
// let unaVariable = true;   let para evitar cambio de tipo de dato

const UNA_VARIABLE_DOS = 10;

// UNA_VARIABLE_DOS = 15; esto da error

const lista = [4,5,2,78,12];
const miLista = lista;

miLista[0] = 1000;

console.log(lista);    // es el mismo objeto
console.log(miLista);  // es el mismo objeto

function calcular(listaPorParametro) {
    listaPorParametro[2] = 300;
}

calcular(lista);
console.log(lista);    // es el mismo objeto
console.log(miLista);  // es el mismo objeto

//
//  Programacion funcional  
//  map, filter, reduce   ->  devuelven siempre un nuevo array  
//

// los string son inmutable   let palabra  no se puede  palabra[0] = 12

// lista = "algo"; no se puede

lista[1] = "cualquier cosa";

console.log(lista);



