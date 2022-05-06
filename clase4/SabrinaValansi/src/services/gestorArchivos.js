import { log } from 'console';
import fs from 'fs'

const datos=fs.readFileSync('./src/textos/texto.txt','utf-8');

datos = datos+" algo ";

fs.appendFileSync('./src/textos/texto.txt',datos);

console.log(datos);