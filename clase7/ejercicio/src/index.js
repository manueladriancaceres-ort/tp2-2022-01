var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ClienteDaoMongodb } from './dao/ClienteDaoMongodb.js';
import Cliente from './modelo/Cliente.js';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const clienteDaoMongodb = new ClienteDaoMongodb();
        const cliente = new Cliente("Maria", 21124);
        yield clienteDaoMongodb.add(cliente);
        console.log(yield clienteDaoMongodb.getAll());
    });
}
main();
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
