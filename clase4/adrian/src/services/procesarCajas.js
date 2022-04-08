import fs from 'fs'
import {caja} from '../modelos/caja.js'

const listaCajas = JSON.parse(fs.readFileSync('./src/resources/cajas.json','utf-8')); 

const procesoCajas = [];

listaCajas.forEach(cajaProceso => {
    caja.comprobantes = cajaProceso.comprobantes;
    caja.valores = cajaProceso.valores;
    procesoCajas.push( 
        { codigo: cajaProceso.codigo, sumaComprobantes: caja.sumaComprobantes()  } );
});

console.log(procesoCajas);

export {procesoCajas}
