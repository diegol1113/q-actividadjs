/*Ejercicio de Javascript - Práctica 


1.
a. Definir dos constantes (variables) llamadas usuario y password y asignar el valor administrador y 1234 respectivamente
b. Preguntar al usuario que ingresa al sitio a través de dos prompts el usuario y la contraseña del sistema
c. Si el usuario y la contraseña coinciden con las del sistema (variable usuario y password) mostrar en el navegador un mensaje de bienvenida
d. Si no coinciden mostrar usuario o contraseña incorrectos

2. Permitir al usuario ingresar 3 numeros dentro de la plataforma. Mostrar (por consola) una vez terminado el proceso cual es el mayor y cual el menor.


3. Definir una variable del tipo cadena cuyo contenido sea �Hola Mundo�.
Cuando el usuario presiona un botón �Mostrar mensaje�, hacer que se muestre el contenido de la variable por consola.*/



//1 a, b, c, d
const usuario = "administrador";
const password = "1234";


if( prompt ("ingrese usuario: ") == usuario && prompt ("ingrese password: ") == password)
    document.write ("BIENVENIDO!!!")
    else{
        alert("Tu usuario y/o contraseña son incorrectos");
        location.href="./error.html"
    }


//2

let numero1, numero2, numero3;


function iniciarprompt(){
numero1= prompt("ingrese n°1");
numero2= prompt("ingrese n°2");
numero3= prompt("ingrese n°3");
parseInt(numero1);
parseInt(numero2);
parseInt(numero3);


if(numero1>numero2 && numero1>numero3){
    console.log("el numero mayor es: " + numero1);
} else if(numero2>numero1 && numero2>numero3){
    console.log("el numero mayor es: " + numero2);
} else if(numero3>numero1 && numero3>numero2);{
    console.log("el numero mayor es: " + numero3);
}

if(numero1<numero2 && numero1<numero3){
    console.log("el numero menor es: " + numero1);
} else if(numero2<numero1 && numero2<numero3){
    console.log("el numero menor es: " + numero2);
} else if(numero3<numero1 && numero3<numero2){
    console.log("el numero menor es: " + numero3);
}}

//3
let mensaje = "Hola Mundo"
function mostrarMensaje(){
    console.log(mensaje);
}