// una constante
const UNA_CONSTANTE = 34;

var miVariable = "algo";
/// mcucho codigo despues
var miVariable = 15;
var miVariable = false
console.log(miVariable);
console.log(typeof miVariable)
// no es recomendable usar var, user let

let otraVariable = 10;
// Esto da error
// let otraVariable = "algo";

var sVariable;
// Esto da error
//let sVariable;

// los string son inmutables
let palabra = "una palabra";
palabra[0] = "U";  // esto no se puede hacer
// se puede reemplazar

// let miLista  = [45,33,20,15];
// para eviar esto miLista = true;
const miLista = [45,33,20,15,-1,-33,100,12,-2];
miLista.push(34);
// miLista = 45; -> no funciona
const otraLista = miLista;
miLista[2] = 33;
otraLista[2]=22;
console.log(miLista);
console.log(otraLista);

let unVar = 1;
let dosVar = "1";
if (unVar == dosVar) {
    console.log("son iguales");
}
if (unVar === dosVar) {
    console.log("no son iguales");
}

// Actividad
// Sumar mayores a 30
// Sumar menores a 30
// Contar mayores a 30
// Contar mayores a 30
const arr = [45,33,20,15,-1,-33,100,12,-2];

let mayoresA30 = 0;
let menoresA30 = 0;
let contMayores30 = 0;
let contMenores30 = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i]>30){
        mayoresA30 += arr[i];
        contMayores30++;
    }
    if(arr[i]<30){
        menoresA30 += arr[i];
        contMenores30++;
    }
}
console.log(mayoresA30, contMayores30, menoresA30, contMenores30);




