console.log("Proyecto");

import {caja} from './service/caja.js'




//CREAR COPIA OBJETO
const cajaCopia = {...caja};

cajaCopia.codigo = 3000;


console.log(cajaCopia);
console.log(caja);

//DESCONTRUIR O DEESTRUCTURAR UN OBJETO

// entre llaves lo que queremos traer del objeto y luego el objeto
const {codigo,descripcion} = caja;
console.log(codigo);
console.log(descripcion);