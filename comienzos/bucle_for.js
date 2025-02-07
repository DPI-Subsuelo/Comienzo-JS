//bucle que se utiliza cuando se conoce la cantidad de veces que queremos que se ejecute
/*for (let f=1; f<= 5; f++) {
    document.write('vuelta número: ', f);
    document.write('<br>');
}
    document.write('Fin del bucle')
    document.write ('<br>');

    for (let b=1; b<= 20; b+=2) {
        document.write('vuelta número: ', b);
        document.write('<br>');
    }
        document.write('Fin del bucle')
        document.write ('<br>');
        //aumento de 2 valores con b+=2

        /*for (let c=1; c<= 20; c+=2) {
            if ( c==15) {
                document.write ('aqui el valor es: ', c);
                document.write('<br>');
            }
        }
            document.write('Fin del bucle')
            document.write ('<br>');¨*/

const frutas= [ 'manzanas', 'peras', 'kiwis', 'ananá'];          
for ( let f=0; f < frutas.length; f++) {
    document.write('Fruta: ', f , '=', frutas[f]);
    document.write('<br>');
}
document.write('Fin del bucle');