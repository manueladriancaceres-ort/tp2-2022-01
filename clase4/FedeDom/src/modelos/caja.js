const caja = {
    codigo: 100,
    descripcion: 'Caja del dia tal..',
    // completar con mas datos
    comprobantes: [{codigo:8,importe:1000,tipo:'I'},{codigo:2,importe:500,tipo:'E'},
    {codigo:3,importe:1000,tipo:'I'},{codigo:1,importe:500,tipo:'E'}],
    // completar con mas datos
    valores: {"mil":5,"cien":45,"diez":5},
    sumaComprobantes() {
        return this.comprobantes.reduce((suma,comprobante) => (suma+=comprobante.importe),0);
    },
    sumaValores() {
        return this.valores.mil * 1000 + this.valores.cien * 100 + this.valores.diez * 10;
    },

    comprobantesMayores(importe) {
        return this.comprobantes.filter(comprobante => comprobante.importe > importe);
    },
    ordenarComprobantesPorCodigo(){
        this.comprobantes.sort((a,b) => a.codigo-b.codigo);
    },
    listaComprobantes(){
        return this.comprobantes.map(
            comprobante => {return { numero: comprobante.codigo, tipoComp: comprobante.tipo } } );
    },
    estaCerradaCierreCaja() {
        // suma de comprobantes - valores == 0
        // esta cerrada la caja

    }
}


function calcular(...args) {
    let var1 = args[0];
    let var2 = args[1];
}

console.log(caja.sumaComprobantes());
caja.ordenarComprobantesPorCodigo();
console.log(caja.comprobantes());


console.log(caja.listaComprobantes());
export { caja }