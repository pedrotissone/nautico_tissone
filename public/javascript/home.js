
//              ESTRUCTURA IF

// let montoPrestamo = prompt("ingrese el monto de dinero que necesite")
// debugger
// if(montoPrestamo <= 100){
//     console.log("El interes es de un 1% anual")
// }else if((montoPrestamo > 100) && (montoPrestamo <= 200)){
//     console.log("El interes es de un 2% anual")
// }else if(montoPrestamo > 200){
//     console.log("el interes es un 3%")
// } else {
//     console.error("debe ingresar un caracter numérico")
// }


//                  CICLO FOR

//          EJEMPLO ESTÁTICO
// for (let i = 0; i <= 10; i++) {
//     console.log(i);    
// }

//          EJEMPLO DINÁMICOS
// for (let turno = 0; turno <= 10; turno++){
//     console.log("su turno es el " + turno)
// }

//          EJEMPLO MULTIPLICACIÓN
// let numeroIngresado = parseInt(prompt("Ingresar número para multiplicar"))
// for(let i = 1; i <= 10; i++){
//     resultado = numeroIngresado * i
//     console.log(numeroIngresado + "x" + i + "=" + resultado)
// }

            // EJEMPLO CONTINUE
// let montoPrestamo = parseInt(prompt ("ingrese monto"))
// let interes = (montoPrestamo * 10) / 100
// for (let i = 1; i <= 10; i++){
//     if ((i < 5) || (i == 6) || (i == 7))
//     continue;  
// console.log(i*montoPrestamo)
// }

//          EJEMPLOS WHILE
// let nombreIngresado = prompt("Ingrese su nombre")
// while (nombreIngresado != "pepe") {
//     console.log("hola " + nombreIngresado)
//     nombreIngresado = prompt("ingrese otro nombre")    
// }

// let numeroTurno = parseInt(prompt("saque un número"))
// while (numeroTurno < 5) {
//     console.log("su número de turno es el " + numeroTurno)
//     numeroTurno = parseInt(prompt("saque otro número"))
// } 

//          CICLO DO WHILE
// let ingresarNombre
// do{
//    ingresarNombre = prompt("ingrese nombre")
//    console.log("hola " + ingresarNombre) 
// } while (ingresarNombre != "pepe")



//          SWITCH
// let color
// do {
//     color = prompt("elija un color")
//     switch (color) {
//         case "blanco":
//             console.log("tenemos stock")            
//             break;

//         case "rojo":
//             console.log("tenemos stock")    
//             break;

//         default:
//             console.log("No hay stock")
//             break;
//     }

// } while (color != "verde")
            // DESAFÍO COMPLEMENTARIO 1

// let montoPrestamo = prompt("Ingrese el monto deseado en números")
// let interes = (montoPrestamo * 10) / 100
// for(let i = 1; i <=20; i++) {
//     if ((i < 5) || (i > 5 && i < 15) || (i > 15 && i < 20))
//     continue;
//     console.log("El interes total de su prestamos a " + i + " años, es "+ (interes * i) + " pesos")
    
// }

            // PRIMER DESAFÍO

// let dolphin23 = 100
// let h20 = 50
// let limpiezaFinal = 25

// function calcularAlquiler(eleccion, dias, limpieza){
//     console.log("El costo del alquiler es de " + (eleccion + dias + limpieza) + " pesos")
// }

// debugger
// let pregunta = prompt("Quiere alquilar un velero?")
// while (pregunta != "si") {
//     switch (pregunta) {
//         case "si":
//             console.log("Genial")
//             break;
    
//         default:
//             pregunta = prompt("Insisto, quiere alquilar un velero?")
//             break;
//     }    
// }

// let barco = prompt("Tenemos un dolphin23 y un h20, cual quiere?")
// if (barco == "h20") {
//     eleccion = h20
//     dias = parseInt(prompt("por cuantos dias lo quiere?")) * 10
//     calcularAlquiler(eleccion, dias, limpiezaFinal)  
// } else if (barco == "dolphin23") {
//     eleccion = dolphin23
//     dias = parseInt(prompt("por cuantos dias lo quiere?")) * 10
//     calcularAlquiler(eleccion, dias, limpiezaFinal)    
// } else{
//     alert("Lo lamento no tenemos stock")
// }







