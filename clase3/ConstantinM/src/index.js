console.log("Proyecto!")
import { caja } from "../service/caja.js"
console.log("--- --- ---")
const cajaCopia = {...caja}

cajaCopia.codigo = 3000;

console.log("--- --- ---")
console.log(caja)
console.log(cajaCopia)
const {codigo,descripcion} = cajaCopia;

console.log(codigo);
console.log(descripcion);