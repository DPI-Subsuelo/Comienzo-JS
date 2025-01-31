let resultado
function suma (a , b){
    resultado = a + b 
    return resultado
}
document.write(suma(30 , 60));
document.write("<br>");

//---------------------------
function saludar (){
    return "Hola a todos!!";

}
var mensaje = saludar();
document.write(mensaje);
//--------------------------
function vercolor (valor) {
    valor= parseInt(prompt("Ingrese un valor: 1 / 3"));
    switch (valor){
        case 1: 
            return "Rojo";
        case 2:
            return "Verde";
        case 3:
            return "Amarillo";
        default:
            return "valor incorrecto";
    }
}
//alert(vercolor ());
document.write("<br>");
document.write(vercolor());