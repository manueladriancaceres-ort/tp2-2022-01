import Cliente from './modelo/Cliente.js';
import ClienteDaoMemoria from './dao/ClienteDaoMemoria.js';
//const cliente : Cliente = new Cliente("Carlos",2543453);
const clienteDaoMemoria = new ClienteDaoMemoria();
clienteDaoMemoria.add(new Cliente("Carlos", 2543453));
clienteDaoMemoria.add(new Cliente("Pedro", 2345355));
clienteDaoMemoria.add(new Cliente("Maria", 21123233));
console.log(clienteDaoMemoria.getAll());
