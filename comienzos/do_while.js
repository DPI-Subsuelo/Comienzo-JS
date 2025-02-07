/*Para bucles
let valor

do {
    valor= parseInt(prompt('Ingrese valor 1 para salir '));
    document.write('Ingreso valor: ', valor);
    document.write('<br>');
} while (valor != 1); //si el valor es diferente de 1, el bucle continua ejecutandose
document.write('FIN DEL BUCLE!!');*/

let usuario, clave, control;

control =0;
usuario=prompt('Ingrese su Usuario: ');
clave= prompt ('Ingrese su clave: ');

do {
    if (clave != "Miacceso33%"){
        clave= prompt ('Clave incorrecta\n'+ 
            'Intente de nuevo....'
        )}
    else { 
            control= 1;}
    }
 while (control!= 1);
document.write('BIENVENIDO ', usuario)

/*El usuario ingresa su nombre y clave.
Si la clave es incorrecta, se muestra un mensaje y se solicita ingresar la clave nuevamente.
El bucle continúa hasta que la clave coincide con "Miacceso33%".
Al ingresar correctamente, se da la bienvenida al usuario.*/

