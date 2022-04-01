console.log("--------------------");
console.log("------Proyecto------");
console.log("--------------------");
import{caja} from './service/caja.js'
console.log(caja);

const copiaCaja = {...caja};

copiaCaja.codigo=200;
console.log(copiaCaja);
