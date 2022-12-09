/*
Ejercicio 3

Crea una función llamada `caracteresEnComun` que recibe dos argumentos: `str1` y `str2`. La función debe retornar 
un arreglo con todos los caracteres que las dos cadenas tienen en común.

Pseudocidigo
1. Se crea la funcion que recibe los dos string.
2. Se declara la variable para guardar el nuevo arreglo
3. Se itera sobre los elementos del arreglo
4. Se declara la variable donde se guardaran los valores repetidos
5. Se evaluan los elementos guardados y se agregan al arreglo final.
*/

function caracteresEnComun(str1, str2){
    let arr = [];
    for (let i = 0; i < str1.length; i++) {
        let repet = 0;
        repet = (str2.split(str1[i]).length - 1);
        if (repet >= 1 && arr.includes(str1[i]) === false){
            arr.push(str1[i]);
        }
    }
    return (arr);
}
  
console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye")); // []