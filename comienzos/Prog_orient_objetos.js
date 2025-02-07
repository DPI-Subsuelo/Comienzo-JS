//esta programacion los progarmas se diseñan y organizan en torno a objetos: estructura que contine propiedades y metodos (funciones),
//atribuye propiedades como herencia, abstracion, encapsulamiento, polimorfismo  
//En js esta programacion se separa en clases( entesd abstractos que definen un conjunto de objetos; 
// es decir, los objetos son miembros de las clases) e instancias( son los mismos objetos)
var Auto = {
    marca: "Toyota",
    modelo: "corolla" , //llevan comillas y una coma , no punto y coma
    anio: "2022" ,
    color: "Negro"
}
document.write("Creación del objeto: Auto");
document.write("<br>");
document.write("marca: ", Auto.marca);
document.write("<br>");
document.write("Modelo: ", Auto.modelo);
document.write("<br>");
document.write("Año: ", Auto.anio);