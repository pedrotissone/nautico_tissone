





// //                  PRIMERA PRE ENTREGA PROYECTO FINAL!!!!!!!!!!!

                                // ELEGIR BARCO

class Barcos{
    constructor(tipo, valor){
        this.tipo = tipo
        this.valor = valor    
    }
}

const barco1 = new Barcos("h 20", 1500)
const barco2 = new Barcos("limbo 21", 2000)
const barco3 = new Barcos("j 24", 3000)
const barco4 = new Barcos("dolphin 23", 3000)
const barco5 = new Barcos("h 26", 4000)
const barco6 = new Barcos("regge 23", 2000)




const arrayBarcos =[barco1, barco2, barco3, barco4, barco5, barco6]

function buscarBarco() {
    let busqueda = prompt("Ingrese el barco que desea buscar").toLowerCase()
    let resultado = arrayBarcos.find( (arrayBarcos) => arrayBarcos.tipo.includes(busqueda))
    console.log(resultado)
    if (resultado) {
        console.log("la consola js encontro una embarcación")
    } else{
        buscarBarco()
    }  
   
    
}
debugger
buscarBarco()

//                              SELECCIONAR DIA DEL MES

const calendario = []
const reservas = []
let trueFalse = true 

for(let i = 1; i <= 31; i++){
      calendario.push(i)
      console.log(calendario)
  } 


    function preguntar1() {     
        let diaDesde = parseInt(prompt("Elegi un dia del mes"))      
        while (diaDesde <= 0 || diaDesde > 31){
            console.log("Ese dia no esta disponible")
            diaDesde = parseInt(prompt("Debe elegir un día dentro del calendario"))
        }
        if (reservas.includes(diaDesde)){
            return console.log("fecha ocupada")
        } else {         
         return diaDesde                
    }
    }
        
    function preguntar2(){
       let diaHasta = parseInt(prompt("Elija hasta que día desea alquilar"))
        if (diaHasta <= diaDesde || diaHasta > 31){
            console.log("Debe elegir una fecha dentro del calendario")
            diaHasta = parseInt(prompt("elija nuevamente hasta que día desea alquilar"))
        } else {
            return diaHasta          
             
        }
        }
        
    function quitarCalendario() {        
        return calendario.splice(indexDesde, indexHasta)   
       
        }     

       
let diaDesde = preguntar1()


let diaHasta = preguntar2()

let indexDesde = calendario.indexOf(diaDesde)

let indexHasta = (diaHasta - diaDesde) + 1

quitarCalendario()



function ocuparReserva () {
    for ( i = diaDesde; i <= diaHasta; i++) {
        reservas.push(i);        
    }
    if (calendario.includes(diaDesde || diaHasta)){
        alert("La fecha esta ocupada")
    } else{
        console.log("Reserva completada")
    }
}
let ocupadoHasta = ocuparReserva()
console.log(calendario)
console.log(reservas)


//                         //CALENDARIO DE M A R T I N I A N O!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // const calendario = []
// // const reservas = []
// // let trueFalse = true

// // const result = {
// //     diaDesde: "",
// //     diaHasta: "",
// // }

// // for (let i = 1; i <= 31; i++) {
// //     calendario.push(i)
// //     console.log(calendario)
// // }


// // function preguntar1() {
// //     let diaDesde = parseInt(prompt("Elegi un dia del mes"))
// //     while ((diaDesde <= 0) && (diaDesde > 31)) {
// //         console.log("Ese dia no esta disponible")
// //         diaDesde = parseInt(prompt("Debe elegir un día dentro del calendario"))
// //     }
// //     if (reservas.includes(diaDesde)) {
// //         return console.log("fecha ocupada")
// //     } else {
// //         result.diaDesde = diaDesde
// //     }
// // }
// // debugger
// // preguntar1()

// // function preguntar2() {
// //     let diaHasta = parseInt(prompt("Elija hasta que día desea alquilar"))
// //     if ((diaHasta <= result.diaDesde) && (diaHasta > 31)) {
// //         console.log("Debe elegir una fecha dentro del calendario")
// //         diaHasta = parseInt(prompt("elija nuevamente hasta que día desea alquilar"))
// //     } else {
// //         result.diaHasta = diaHasta

// //     }
// // }
// // preguntar2()

// // function quitarCalendario() {
// //     return calendario.splice(indexDesde, indexHasta)

// // }




// // let indexDesde = calendario.indexOf(result.diaDesde)
// // console.log(indexDesde)
// // let indexHasta = (result.diaHasta - result.diaDesde) + 1
// // console.log(indexHasta)
// // quitarCalendario()



// // function ocuparReserva() {
// //     for (i = result.diaDesde; i <= result.diaHasta; i++) {
// //         reservas.push(i);
// //     }

// //     if (calendario.includes(result.diaDesde || result.diaHasta)) {
// //         alert("La fecha esta ocupada")
// //         return
// //     } else {
// //         while (trueFalse) {
// //             let pregs = prompt("¿Desea alquilar otra fecha? (si/no)")
// //             if (pregs == "si") {
// //                 preguntar1()
// //                 preguntar2()
// //                 quitarCalendario()
// //                 ocuparReserva()
// //             } else {
// //                 trueFalse = false
// //             }
// //         }

// //         return
// //     }
// // }
// // let ocupadoHasta = ocuparReserva()





  









    






// let calendario = []
// let alquilados = []
// let trueofalse = true
// for (let i = 0; i < 31; i++) {
//     calendario.push(i)
//     console.log(calendario)
// }


// debugger
// function alquilar(){
//     let dia = parseInt(prompt("Ingrese el dia que desea alquilar su bote"))
//     while (dia < 0 || dia > 31) {
//         dia = parseInt(prompt("Ingrese un dia valido"))
//     }
//     otroAlquiler()
//     verificarDia(dia)
//     diaAlquilado(dia)
// }

// function otroAlquiler(){
//     do{
//         let option = prompt("Desea alquilar otro bote? \n Indica con si o con no")
//         if(option == "si"){
//             alquilar()
//             trueofalse= false
//         }else if(option == "no"){
//             console.log("Gracias por usar nuestro servicio")
//             trueofalse= false
//         }else{
//             trueofalse = true
//         }

//     }while(trueofalse)
// }

// function diaAlquilado(dia){
//     alquilados.push(dia)
// }

// function verificarDia(dia){
//     if((calendario.includes(dia)) && alquilados.includes(dia)){
//         console.log("El dia no esta disponible")
//     }else{
//         console.log("El dia esta disponible")
//     }
// }

// alquilar()

