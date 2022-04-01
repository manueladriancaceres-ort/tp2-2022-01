//testasd

const unaList= [4,33,5,6,7,8];

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

const listafiltrada = unaLista.filter( numero => numero > 8 );
console.log(listafiltrada);

const listaSumaUnoAcadaElemento = unaLista.map( numero => numero > 8 );
console.log(listaSumaUnoAcadaElemento);
g
const totalDeLaLista = unaLista.reduce( (acum,numero) => (acum + numero), 0);
console.log(totalDeLaLista);
