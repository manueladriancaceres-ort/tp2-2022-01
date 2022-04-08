const caja = {

    codigo: 100,
    descripcion: 'Caja del dia tal..',

    // completar con mas datos
    comprobantes: [{codigo:1,importe:1000,tipo:'I'},{codigo:3,importe:500,tipo:'E'},{codigo:53,importe:300,tipo:'E'},{codigo:2,importe:2000,tipo:'I'}],

    // completar con mas datos
    valores: {"mil":5,"cien":45,"diez":5},

    sumaComprobantes() {
        return this.comprobantes.reduce((suma, comprobante) => (suma+comprobante.importe),0); //el ,0 es de donde inicia el acumulador. devuelve suma
    },
    comprobantesMayores(importe){
        return this.comprobantes.filter(comp => comp.importe > importe);
    },
    ordenarPorCodigo(){
      return this.comprobantes.sort((a,b) => a.codigo - b.codigo);  
    },
    sumaValores() {
        return this.valores.mil * 1000 + this.valores.cien * 100 + this.valores.diez * 10;
    },
    listaDeComprobantes(){
        return this.comprobantes.map(comp => {return {numero : comp.codigo, tipo: comp.tipo}});
    },
    estaCerradaCierreCaja() {
        // suma de comprobantes - valores == 0
        // esta cerrada la caja
    }
}

export {caja};