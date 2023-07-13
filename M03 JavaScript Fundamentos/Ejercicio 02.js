/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;

}


// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado = x + y;
   return resultado;

}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultadoResta = x - y;
   return resultadoResta;
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var resultadoDivision = x / y;
   return resultadoDivision;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var resultadoMultipicacion = x * y;
   return resultadoMultipicacion;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var resultadoResto = x % y;
   return resultadoResto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
