console.log("Proyecto");

import {caja} from './service/caja.js'

const cajaCopia = {...caja};

cajaCopia.codigo = 3000;

console.log(cajaCopia);
console.log(caja);

const { codigo,descripcion }  = caja;

console.log(codigo);

console.log(descripcion);
