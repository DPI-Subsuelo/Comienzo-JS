//utiliza un rango de valores  especificos para hacer un bucle, tomando como condicion un objeto o elemento con tamaño predefinido, ej: valor entero, string,array,etc
/*let palabra = 'JavaScript' ;
for ( let f in palabra){
    document.write(palabra[f]);
    //document.write ('<br>');
}*/

/*let palabra = 'Murcielago';
let vocal= 0;
for( let f in palabra){ 
    if (palabra [f] == 'a'|| palabra [f] == 'e'|| palabra [f] == 'i'|| 
        palabra [f] == 'o'|| palabra [f] == 'u'){
            vocal++;
        }

}
document.write ('Cantidad de vocales: ', vocal); */

let palabra = '';
palabra = prompt("Ingrese una Palabra para se analizada");
let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
let total_vocales = 0

document.write ('La palabra es: ', palabra);
document.write ('<br>');
// Convertir la palabra a minúsculas
palabra = palabra.toLowerCase(); //toLoweTrCase(): Convierte la palabra a minúsculas

/*El bucle for...of se utiliza para recorrer de manera sencilla todos los elementos de un iterable, permitiendo:

Operar directamente con los valores (sin preocuparte por los índices).
Hacer tareas como buscar, contar, o procesar cada elemento de forma individual.*/

//Reemplaza las comparaciones múltiples con una búsqueda directa en la cadena 'aeiou'
for (let letra of palabra) {
    if (vocales.hasOwnProperty(letra)) { // Verificar si la letra es una vocal
        vocales[letra]++; 
        total_vocales++;
    }
}

document.write(`Cantidad total de vocales: ${total_vocales}`);
document.write('<br>');

// Mostrar el conteo de cada vocal
for (let [vocal, cantidad] of Object.entries(vocales)) {
   document.write(`Cantidad de '${vocal}': ${cantidad}` , '<br>');
    //console.log(`Cantidad de '${vocal}': ${cantidad}` , '<br>'); solo se muestra x consola, no en usuario
}
