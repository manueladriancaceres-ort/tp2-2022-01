import fs from 'fs'

const datos = fs.readFileSync('./src/resources/texto.txt', 'utf-8')


fs.appendFileSync('./src/resources/texto.txt', 'Esto es un agregado'); //LO AGREAG EN EL ARCHIVO DE TEXTO.TXT

console.log(datos);