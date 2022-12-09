/*
Ejercicio 2

Escribe una función llamada `frecuencias` que reciba una cadena de texto y 
retorne un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)

Pseudocodigo
1. Se crea la funcion que recibe la cadena de texto
2. Se declaran las variables tanto para guardar el objeto como para el contador 
3. Se itera cada una de las posiciones del string
4. Se utiliza el metodo .splite para volvert la cadena de texto un array 
5. Se evalua el valor del elemento del string para ingrementar el contador
6. Mostrar el objeto 


*/

function frecuencias(str) {
    let objeto = {};
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
    	contador = (str.split(str[i]).length - 1);
        if (str[i] !== "") {
            objeto [str[i]] = contador;
        }
    }
    return (objeto);
}
    
    // código de prueba
    console.log(frecuencias("hola mundo")) // "
    //Resultado esperado { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
    
    console.log(frecuencias("anita lava la tina"))
    //Resultado esperado { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }