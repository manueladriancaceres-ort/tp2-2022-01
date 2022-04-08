import fs from 'fs';

const data = fs.readFileSync('./src/resources/texto.txt' , 'utf-8');

console.log(data);