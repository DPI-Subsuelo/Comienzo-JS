//declaración de array
let numeros= [15,30,68,80,4,27];
document.write('Elementos: ', numeros)
document.write('<br>');
document.write('Primer elemento: ', numeros[0]);
document.write('<br>');
numeros[0]= 14;
document.write('Elementos: ', numeros);
document.write('<br>------------------');

let frutas= ['Manzanas', 'Peras','Bananas', 'Kiwis'];
document.write('<br>');
document.write('Frutas: ', frutas);
document.write('<br>');
//METODOS DE ARRAYS
//ver cantidad de elementos
document.write('Cantidad: ',frutas.length);
document.write('<br>');
//ver ultimo elemento
document.write('Ultima fruta: ', frutas[frutas.length-1]);
document.write('<br>');

//array tipo texto
document.write('En string: ', numeros.toString());
document.write('<br>');
document.write('<br>');

//Unir tipos de arrays
let letras=['a','b','c'];
let numeros2 = [1,2,3];
document.write('Alfanuemrico: ', letras.concat(numeros2));
document.write('<br>');

//borrar un elemento del arrays
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar un numero al arrays
numeros.push(29);
document.write(numeros);
document.write('<br>');

//para eliminar primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

//insertar elemnto al inicio
numeros.unshift(1000);
document.write(numeros);
document.write('<br>');

//eliminar a partir de un punto
numeros.splice(2,3); //a partir de la posicion 2 que retire 3 elementos.Mostrando solo los primeros y los ultimos restantes.
document.write(numeros);
document.write('<br>');

//copiarun array
let cantidades =[140,200,300,500,600];
let copia = cantidades.slice(1,4); //se copia a partir de la posicion 1 hasta la 4, sin incluirla.
document.write('Array copia: ', copia);
document.write('<br>');

document.write(frutas.sort()); //ordena el arreglo de forma alfabetica
document.write('<br>');

let objetos = ['tinta, ', 'maquina, ', 'planeta, ', 'almacen, ' ,'bucle'];
document.write(objetos.sort());
document.write('<br>');

//trae los elementos de atras hacia adelante
document.write(objetos.reverse());
document.write('<br>');