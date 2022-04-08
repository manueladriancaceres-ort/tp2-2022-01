
const caja = {
    codigo: 100,
    descripcion: 'Caja del dia tal..',
    // completar con mas datos
    comprobantes: [{ codigo: 3, importe: 1000, tipo: 'I' }, { codigo: 1, importe: 500, tipo: 'E' }, { codigo: 2, importe: 1000, tipo: 'I' }, { codigo: 6, importe: 500, tipo: 'E' }],
    // completar con mas datos
    valores: { "mil": 5, "cien": 45, "diez": 5 },
    sumaComprobantes() {
        return this.comprobantes.reduce((suma, comprobante) => (suma + comprobante.importe), 0);
    },
    sumaValores() {
        return this.valores.mil * 1000 + this.valores.cien * 100 + this.valores.diez * 10;
    },
    comprobantesMayores(importe) {
        return this.comprobantes.filter(comprobante => comprobante.importe > importe);
    },
    ordenarComprobantes() {
        this.comprobantes.sort((a, b) => a.codigo - b.codigo);
    },
    listarComprobantes(){
        return this.comprobantes.map(comp => {return {numero: comp.codigo, tipoComp: comp.tipo}});
    },
    estaCerradaCierreCaja() {
        // suma de comprobantes - valores == 0
        // esta cerrada la caja
    }
}

export { caja }
