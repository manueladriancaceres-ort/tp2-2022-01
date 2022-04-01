// Test del objeto caja
// Comparar resultado esperado contra resultado obtenido

import { caja } from '../../src/service/caja.js'

const esperado = 0;

if (esperado == caja.sumaValores()) {
    console.log("Test 1, ok");
} else {
    console.log("Test 1, error");
}