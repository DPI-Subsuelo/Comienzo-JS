class Persona { //creacion de objetos
    nombre ="Homero "; //atributos
    apellido= "Simpson";
    domicilio= "Av. Siempreviva ";
    telefono="123456789";
    email= "homero.simpson@gmail.com";

    trabaja(){ //metodos
        return "Trabaja en la planta nuclear";
    }
    Estudia(){
        return "Escuela Primaria de Sprinfield";

    }

}
const homero= new Persona();
const Bart= new Persona();
const Lenny= new Persona();
document.write (homero.nombre +" "+ homero.apellido);
document.write("<br>");
document.write (homero.trabaja ());
document.write("<br>");
document.write("<br>");
document.write("Bart ", Bart.apellido);
document.write("<br>");
document.write("Estudia en: ", Bart.Estudia());
document.write("<br>");
document.write("Lenny ", Lenny.trabaja())