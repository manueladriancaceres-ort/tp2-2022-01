exports.persona = () => {
    const persona = {
        "nombre" : "Juan",
        "apellido" : "Gomez"
    }
    
    return persona;
}

exports.caja = () => {

    const caja = {
        codigo: 100,
        fecha: 'hoy',
        comprobantes: [{"codigo": 1, "importe": 100},{"codigo": 1, "importe": 100}],
        valores: [{"mil":2,"cien":5}],
        sumaComprobantes() {

            return 10;
        },
        sumaValores() {
            return 50;
        }    
    }

    return caja
}