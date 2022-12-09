/*
Ejercicio 1

Escribe una función llamada `numDuplicados` que reciba un string y 
retorne el número de caracteres que aparecen más de una vez.
Pseudocodigo
1. Crear la funcion numDuplicados que se encarga de recibir el string
2. Selecciona el primer valor para empezar a iterar.
3. identificar si existen coincidencias en el resto del string
4. Agregar al array el  valor encontrado
5. Guardar en un contador.
6. Pasar al siguiente caracter del string (punto 3 y 4)
7. Mostrar el contador.
*/



 function numDuplicados(str) {
  let contador= 0;
  let duplicados = [];

 for (let i=0; i<str.length; i++) {
       if (!duplicados.includes(str[i]) && str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
                    duplicados.push(str[i]);
                    contador = contador+1;
                }
            }
            return contador;
        }

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0 
console.log(duplicados);