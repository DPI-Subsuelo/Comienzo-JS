/*let valor
valor= parseInt (prompt("Ingrese un valor del 1 al 3"));

switch (valor) { //permite ejecutar bloques de codigo
    case 1:
        document.write('Ingreso el uno');
        break; //se usapara salir del bucle
    case 2:
        document.write('Ingreso el dos');
        break;
    case 3:
        document.write('Ingreso el tres');
        break;

    default:// controla todo lo que pasa si no sse cumple el case 1,2 o 3;
     document.write('No es un valor válido')

        break;
}*/
let color
color= prompt('Ingrese un color: rojo/verde/azul, en minusculas' );
switch (color) {
    case 'rojo':
        document.write('Ingreso rojo');
        break;
     case 'verde':
        document.write('Ingreso verde');
        break;
    case 'azul':
        document.write('Ingreso azul');
        break;
    default:
        document.write('No es valido el color');
        break;
}