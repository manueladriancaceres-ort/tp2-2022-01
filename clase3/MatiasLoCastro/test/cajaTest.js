// Test del objeto caja


/* Comparar resultado esperado contra resultado obtenido */

import { caja } from "../src/service/caja";

const esperado = 0;

if (esperado == caja.sumaValores()){
    console.log("ok")
}else{
    console.log("Not ok")
}