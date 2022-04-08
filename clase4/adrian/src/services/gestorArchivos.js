import fs from 'fs'

const datos = fs.readFileSync('./src/resources/texto.txt','utf-8');

datos = datos + " algo"

fs.appendFileSync( './src/resources/texto.txt' , datos ) ;

console.log(datos);