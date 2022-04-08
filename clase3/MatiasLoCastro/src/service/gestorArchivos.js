import fs from 'fs'

const listaCajas = JSON.parse(fs.readFileSync('./src/resources/cajas.json', 'utf-8'));

const procesoCajas = [];

listaCajas.forEach(caja => {
    procesoCajas.push( {codigo: caja.codigo } );
});

console.log(procesoCajas);

export {procesoCajas}