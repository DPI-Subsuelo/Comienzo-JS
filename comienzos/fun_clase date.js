// (clase) es una interfas de datos, funcion que  facilita el almacenamiento y la obtencion de fechas y horas
const Fecha_actual = new Date();

document.write(Fecha_actual); //muestra toda la fecha y hora con el horario del navegador
document.write ("<br>");

let fecha =new Date();
document.write("Hoy es: ", fecha.getDate()); //muestra el dia
document.write("<br>");
document.write('El mes es: ' , fecha.getMonth()+1);//muestra el mes
document.write("<br>");
document.write('La hora es: ', fecha.getHours(), ':',
                               fecha.getMinutes(), ':', 
                               fecha.getSeconds()); //muestra la hora,minutos y segundos
