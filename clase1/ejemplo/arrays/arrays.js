exports.calcularSuma = function (unArraglo) {
    let suma = 0;
    for (let index = 0; index < unArraglo.length; index++) {
        const element = unArraglo[index];
        suma += element;
    }
    return suma;
}

exports.sumaPares = function (unArraglo) {
    let suma = 0;
    for (let index = 0; index < unArraglo.length; index++) {
        const element = unArraglo[index];
        if(element%2==0) {
            suma += element;
        }
    }
    return suma;
}
