class ClienteDaoMemoria {
    constructor() {
        this.clientes = [];
    }
    add(cliente) {
        this.clientes.push(cliente);
    }
    getAll() {
        return this.clientes;
    }
    get(clave) {
        return this.clientes.filter(cliente => cliente.documento.toString() == clave)[0];
    }
}
export default ClienteDaoMemoria;
