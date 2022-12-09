/*
Ejercicio 4

Escribir una función llamada `ajustarTexto` que reciba dos argumentos:  un string y un número (que representa 
una longitud).  La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena 
es mayor al número, debes recortar la cadena. De lo contrario agrega espacios en blanco hasta completar la longitud.

*/

function ajustarTexto(str, numero){
    var result = "";
    for (let i = 0; i < numero && i < str.length; i++){
        result = result + str[i];
    }
    if (str.length < numero){
        for (let j = 0; j <= (numero - str.length); j++){
            result = result + " ";
        }
    }
    return (result);
}


console.log(ajustarTexto("", 3)); // " " 
console.log(ajustarTexto("hola", 3)); // "ho" 
console.log(ajustarTexto("Hola", 0)); // "" 
console.log(ajustarTexto("Hola", 5)); // "Hola "