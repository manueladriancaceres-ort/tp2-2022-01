import fs from 'fs'
import {caja} from '../modelos/caja.js'

const listaCajas = JSON.parse(fs.readFileSync('./src/resources/cajas.json', 'utf-8')); //ES UN STRING, HAY QUE CONVERTIRLO A JSON

console.log(listaCajas[1]);

const procesarCajas = [];

listaCajas.forEach(cajaProceso => {
    caja.comprobantes = cajaProceso.comprobantes;
    caja.valores = cajaProceso.valores;
    procesarCajas.push(
        {codigo: cajaProceso.codigo, sumaComprobantes: caja.sumaComprobantes()}
    );
});

console.log(procesarCajas);
//export {procesarCajas}