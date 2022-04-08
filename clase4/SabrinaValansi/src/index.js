console.log("Index src");

import {caja} from './modelos/caja.js'

console.log(caja.sumaValores());
console.log(caja.sumaComprobantes());
console.log(caja.comprobantesMayores(500));
caja.ordenarComprobantes();
console.log(caja.comprobantes);
console.log(caja.listaComprobantes());