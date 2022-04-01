//Test del objeto caja



//
// Comparar resultado esperado contra resultado obtenido

import {caja} from '../../src/service/caja.js'

const esperado = "";

if (esperado == caja.sumaValores() ) {
    console.log("Test 1 OK");
} else {
    console.log("Test 2 Error");
}

