let nombre, edad;
nombre= prompt ('Ingrese su nombre');
edad= prompt('Ingrese su edad');
edad= parseInt(edad); //se declara a la edad como entero, para que cuando se deje en blanco este campo, no lo tome como una edad menor a 18, sino que lo tome como valor nulo

if (edad >= 18) {
    document.write('Bienvenido! ' , nombre);
}else{
    if (edad < 18){document.write(nombre, ' Eres menor de edad') }
    else {
        document.write('NO HAS INGRESADO DATOS');
    }
}