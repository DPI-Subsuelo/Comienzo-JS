//redondeo al siguente entero en decimal .5
var precio = Math.round(399.53);
document.write("Precio: ", precio);
document.write("<br>");

//redondeo sin importar decimal, hacia arriba
var precio= Math.ceil(299.3);
document.write("Precio: ", precio);
document.write("<br>");

//redondeo sin importar decimal, hacia abajo
var precio= Math.floor(299.9);
document.write("Precio: ", precio);
document.write("<br>");

//calcular el seno de un angulo
var seno= Math.sin(30);
document.write("Seno de 30: ", seno);
document.write("<br>");

//calcular exponencial
var expo= Math.exp(2);
document.write("Exponecial de 2: ", expo);
document.write("<br>");

//calculo de log.
var logaritmo= Math.log(10);
document.write("Logaritmo de 10: ", logaritmo);
document.write("<br>");

//calcular valor absoluto
var absoluto= Math.abs(-20);
document.write("valor absoluto de -20: ", absoluto);
document.write("<br>");

//calculo de valor max. de seciencia
var maximo= Math.max(10,30,50,770,46,2);
document.write("valor maximo es: ", maximo);
document.write("<br>");

//calculo de valor min. de seciencia
var minimo= Math.min(10,30,50,770,46,2);
document.write("valor minimo es: ", minimo);
document.write("<br>");

//traer un valor aleatorio
var aleatorio= Math.random();
document.write("valor aleatorio es: ", aleatorio);
document.write("<br>");

//traer un valor aleatorio REDONDEADO "()*10", entre 0 y 10 
var aleatorio= Math.round (Math.random()*10);
document.write("valor aleatorio es: ", aleatorio);
document.write("<br>");

//raiz cuadrada
var Raiz= Math.sqrt(81);
document.write("raiz cuadrada de 81 es: ", Raiz);
document.write("<br>");

//calcular exponente
var exponente= Math.pow(4,2);
document.write("exponente de 4 a la 2: ", exponente);

