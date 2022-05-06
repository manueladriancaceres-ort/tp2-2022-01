import Cliente from '../modelo/Cliente.js';
import Dao from './Dao.js';

class ClienteDaoMemoria implements Dao<Cliente,string> {

    clientes: Array<Cliente> = [];

    add (cliente: Cliente) : void {
        this.clientes.push(cliente);
    }
    getAll () : Cliente[] {
        return this.clientes;
    }

    get (clave: string) : Cliente {
        return this.clientes.filter(cliente => cliente.documento.toString() == clave )[0];
    }   
}

export default ClienteDaoMemoria