import fs from 'fs'
import {caja} from '..modelos/caja.js'

//APLICAMOS PARSE PARA IMPRIMIR OBJETOS POR POS
const data = JSON.parse(fs.readFileSync('./src.resources/cajas.json','utf-8'));


console.log(data[0]);
console.log(data[1]);

const listaCajas = JSON.parse(fs.readFileSync('./src.resources/cajas.json','utf-8'));


const procesoCajas= [];
const procesoCajas2= [];

listaCajas.forEach(caja => {
    procesoCajas.push( {codigo: caja.codigo } );
});

console.log(procesoCajas);


listaCajas.forEach(cajaProceso => {
    caja.comprobantes = cajaProceso.comprobantes;
    caja.valores = cajaProceso.valores;
    procesoCajas2.push( 
        {codigo: cajaProceso.codigo, sumaComprobantes: caja.sumaComprobantes() } );
});

console.log(procesoCajas2);



export {procesoCajas}