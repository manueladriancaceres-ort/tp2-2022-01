const cliente = {
    nombre: "Carlos",
    edad: 23,
    calcularEdad: function() {
        return this.edad;
    },
    getNombre: function() {
        return this.nombre;
    }
}

console.log(cliente);
cliente.apellido = "Gomez";
console.log(cliente);
delete cliente.apellido;
console.log(cliente);

