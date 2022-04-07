const caja = {
    codigo: 100,
    descripcion: 'Caja del dia tal..',
    // completar con mas datos
    comprobantes: [{codigo:1,importe:1000,tipo:'I'},{codigo:1,importe:500,tipo:'E'}],
    // completar con mas datos
    valores: {"mil":5,"cien":45,"diez":5},
    soloIngreso() {
        this.comprobantes.filter(comp => comp.tipo == 'E' && caja.codigo == 1 )
        },
    sumaComprobantes() { 
    },
    sumaValores() { },
    estaCerradaCierreCaja() {
        // suma de comprobantes - valores == 0
        // esta cerrada la caja
    }
}

// Object.freeze(caja);

function calcular(...args) {
    let var1 = args[0];
    let var2 = args[1];
}

// caja.soloIngreso();

export { caja }