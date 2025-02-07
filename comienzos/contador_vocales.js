let palabra = '';

palabra = prompt("Ingrese una Palabra para ser analizada");

if (!palabra || palabra.trim() === "") //detecta valores como null, undefined, o una cadena vacía "".
//palabra.trim() === "": Verifica si la palabra tiene solo espacios en blanco.
 {
    document.write("No ingresaste una palabra válida.");
} else {
    let vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
let total_vocales = 0; 
document.write("<br>");
document.write ('La palabra es: ', palabra);
document.write ('<br>');
// Convertir la palabra a minúsculas
palabra = palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //toLoweTrCase(): Convierte la palabra a minúsculas y normalize las vocales acentuadas se tratarán como no acentuadas
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
}