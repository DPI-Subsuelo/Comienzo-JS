/*for ( let f = 0; f < 10; f++){
    document.write(f);
    document.write("<br>");
    if (f==3){
        document.write('Bucle detenido en vuelta: ',f );
        document.write("<br>");
        break; //hace el blecle se detenga y no siga corriendo
    
    }
}*/
//la clausual "continue", se salta algunas repeticiones del bucle cuando se de una condicion especifica.

let palabra ="JavaScript";
let resultado = '';

for (let f in palabra) //bucle for in 
{
    if (palabra[f]=='a') {
        continue;
    }else{
        resultado+= palabra [f]
    }
}
document.write(resultado);

//por cada "a" que se encuentre el bucle cuando recorra la palabra Javascript, va a saltarlas