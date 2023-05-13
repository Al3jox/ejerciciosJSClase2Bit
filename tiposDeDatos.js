// Reglas
// var alturaMin = 1.10;
// var edadMin = 18;

// Datos de usuarios

// var nombre = "Alejandro";
// var altura = 2.70;


// var resultado = (anioPresente - anioNacimiento);


// Imprime info. General
// console.log(nombre + " tiene: " + resultado + " años y mide: " + altura + " metros.");


// if(resultado >= 100){
//     console.log("¿Se quiere matar?");
// }else{
//     if(resultado < edadMin && altura < alturaMin){
//         console.log("Apreciado " + nombre + " usted no puede acceder a este juego, ya que usted mide: " + altura +". Además usted tiene: " + resultado + "años y la edad mínima es: " + edadMin);
//     }
    
//     if(resultado > edadMin && altura < alturaMin){
//         console.log("Aunque usted es mayor de edad, no cumple con la altura mínima para poder ingresar a este juego");
//     }
    
//     if(resultado < edadMin && altura > alturaMin){
//         console.log("Aunque usted cumple con la altura necesaria, no cuanta con la edad mínima para ingrear");
//     }
    
//     if(resultado > edadMin && altura > alturaMin){
//         console.log("Usted cumple con ambas condiciones. Que se divierta!!");
//     }
// }



// Las funciones son procedimientos independientes que se pueden presentar de 4 formas: 
// 1 - Función que recibe y retorna
// 2 - Función que no recibe y retorna
// 3 - Función que recibe u no retorna
// 4 - Función que no recibe y no retorna


// Caso1
// function calcularEdad(){

//     let anioPresente = 2023;
//     let anioNacimiento = 1996;

//     // console.log(anioPresente - anioNacimiento);
//     return (anioPresente - anioNacimiento);

// }

// var resultCalcularEdad = calcularEdad();



// ***********************************************************  Clase 2 JS 

// ======================================
// Ciclo / bucles / loops
// ======================================

    // 1 - For
    // 2 - while
    // 3 - do while

//  var numConsignaciones = 50;

// for(let i = 1;     i<=numConsignaciones;     i++ ){
//     console.log("Esta es la consignación número: " + i);
// }

// var i = 1;

// while(i<=numConsignaciones){
//     console.log("Esta es la consignación número: " + i);
//     i++;
// }

// console.log("Aquí se finaliza el programa");


// do{
//     console.log("Esta es la consignación número: " + i);
//     i++;
// }while(i<=numConsignaciones);





// ======================================
/** 
 * ?Arreglos / Arrays /
*/ 
// ======================================


// const listaAseo1 = ["Cloro", "Traperas", "Jabon de ropa", "Jabon para cuerpo", "Cepillo", "Fabuloso"];

// for(let i = 0;   i<listaAseo1.length; i++){
//     console.log(listaAseo1[i]);
// }


/** 
 *  ? Metodos y recorridos de los arreglos 
*/

const listaAseo2 = ["Shampoo", "Cloro", "Traperas", "Jabon de ropa", "Jabon para cuerpo", "Cepillo"];


function recorridoDeLista(arr){
    for(let i = 0;  i<listaAseo2.length; i++){
        console.log(listaAseo2[i]); 
    }
}

recorridoDeLista(listaAseo2);

// var producto = "Fabuloso";

// listaAseo2.push(producto);


// console.log("Esta es la forma de imprimir con el ciclo FOR");
// for(let i = 0;  i<listaAseo2.length; i++){
//     console.log(listaAseo2[i]);
// }



// console.log("Esta es la forma de imprimir con el ciclo while");

// let j = 0;
// while(j < listaAseo2.length){
//      console.log(listaAseo2[j]);
//      j++;
// }



// console.log("Esta es la forma de imprimir con el ciclo do while");

// let k = 0;
// do{
//     console.log(listaAseo2[k]);
//     k++;
// }while(k < listaAseo2.length);




/** 
 * ? Objetos literales
*/

// let perro = {
//     nombre: "Coraje",
//     tamaño: "pequeño",
//     colorPelo: "Piel",
//     personalidad: "Cobarde",
//     fechaNacimiento: 1999,
//     habilidades: {
//         estadoPasivo: "Poca materia gris",
//         estadoAsustado: "Inteligente",
//         estadoAlamardo: "Creativo"
//     }
// }

// alert("El nombre de su perro es: " + perro.habilidades.estadoAsustado);





