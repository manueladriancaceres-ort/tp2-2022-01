import {ClienteDaoMongodb} from './dao/ClienteDaoMongodb.js'
import Cliente from './modelo/Cliente.js'

async function main() {

    const clienteDaoMongodb : ClienteDaoMongodb = new ClienteDaoMongodb();
    const cliente : Cliente = new Cliente("Maria",21124);
    await clienteDaoMongodb.add(cliente);
    console.log(await clienteDaoMongodb.getAll());
    

}

main()



/*
import Cliente from './modelo/Cliente.js'
import ClienteDaoMemoria from './dao/ClienteDaoMemoria.js'

//const cliente : Cliente = new Cliente("Carlos",2543453);

const clienteDaoMemoria : ClienteDaoMemoria = new ClienteDaoMemoria();

clienteDaoMemoria.add(new Cliente("Carlos",2543453));
clienteDaoMemoria.add(new Cliente("Pedro",2345355));
clienteDaoMemoria.add(new Cliente("Maria",21123233));

console.log(clienteDaoMemoria.getAll());

*/

