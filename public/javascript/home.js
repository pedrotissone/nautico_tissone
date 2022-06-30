

                                                //C L A S E S

class Barcos{
    constructor(id, tipo, precio, cantidad){
        this.id = id
        this.tipo = tipo
        this.precio = precio
        this.cantidad = cantidad   
    }
}

const barco1 = new Barcos(1, "h 20", 1500, 3)
const barco2 = new Barcos(2, "limbo 21", 2000,2)
const barco6 = new Barcos(3, "regge 23", 2000, 1)
const barco4 = new Barcos(4, "dolphin 23", 3000, 1)
const barco3 = new Barcos(5, "j 24", 3000, 2)
const barco5 = new Barcos(6, "h 26", 4000, 1)





class Equipamiento{
    constructor(id, nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

const equipamiento1 = new Equipamiento(1, "gps garmin", 1000, 3)
const equipamiento2 = new Equipamiento(2, "prismatico", 2000, 2)
const equipamiento3 = new Equipamiento(3, "pinula", 500, 3)
const equipamiento4 = new Equipamiento(4,  "carta nautica", 500, 5)
const equipamiento5 = new Equipamiento(5,"sextante", 2000, 1)
const equipamiento6 = new Equipamiento(6, "bichero", 500, 3)


//                                              A R R A Y S


const arrayBarcos =[barco1, barco2, barco3, barco4, barco5, barco6]

const arrayEquipamiento = [equipamiento1, equipamiento2, equipamiento3, equipamiento4, equipamiento5, equipamiento6]

const arrayCarrito = []


//                                          BUSQUEDA DEL BARCO DESEADO (QUIZAS LO SAQUE DEL PROYECTO)

// function buscarBarco() {
//     let busqueda = prompt("Ingrese el barco que desea buscar").toLowerCase()    
//     let resultado = arrayBarcos.filter((arrayBarcos) => arrayBarcos.tipo.includes(busqueda))
//       if (resultado.length !== 0) {
//         return console.table(resultado)
//       } else {
//         console.log("Lo lamento, no tenemos el barco seleccionado")
//         buscarBarco()
//       }
// }

// // buscarBarco()






                                                  // GENERACION DE TABLA DE PRODUCTOS DINAMICA

function listarEquipamiento() {
  arrayEquipamiento.forEach( (equip)=>{
    const listado = `<tr>
                      <td>${equip.id}</td>
                      <td>${equip.nombre}</td>
                      <td>${equip.precio}</td>
                      <td>${equip.cantidad}</td>
                      <td><button class="boton  btn btn-primary" id="${equip.id}"> AGREGAR </button></td>
                    </tr>`
                    document.querySelector("tbody").innerHTML += listado                                                                               
  });    

}
listarEquipamiento()


//                                                        CAMBIO DE COLOR DEL BOTON EQUIPAMIENTO AL HACER MOUSEDOWN/UP

let botonColor = document.querySelectorAll(".boton")
botonColor.forEach(btn =>{
  btn.addEventListener("mousedown",(b)=>{
    btn.className = "btn-primary2"
  })
  btn.addEventListener("mouseup",(b)=>{
    btn.className = "btn-primary"
  })
})
//                                                        CAMBIO DE COLOR DEL BOTON DE LOS BARCOS AL HACER MOUSEDOWN/UP


let botonColorBarco = document.querySelectorAll(".boton-barcos")
    botonColorBarco.forEach(btn =>{
    btn.addEventListener("mousedown",(b)=>{   
    btn.className = "btn-primary2"
    })
    btn.addEventListener("mouseup",(b)=>{   
    btn.className = "btn-primary"
      })
  })





 
//                                                        CARGA DE BARCO AL CARRITO

const botonBarcos = document.querySelectorAll(".boton-barcos")

botonBarcos.forEach(elm => {
  elm.addEventListener("click", (e) => {
    let resultado = e.target.id    
    busquedaArrayBarcos(resultado)
  
  })
})


function busquedaArrayBarcos(id){
    let resultado = arrayBarcos.filter(elm => elm.id == id)
    console.log(resultado[0])    
    arrayCarrito.push(resultado[0])
    renderizarCarritoBarcos(resultado)
}




                                                        // CARGA DE EQUIPAMIENTO AL CARRITO

const boton = document.querySelectorAll(".boton")



boton.forEach(elm => {
  elm.addEventListener("click", (e) => {
   let resultado = e.target.id
   busquedaArray(resultado)
  })
})



function busquedaArray(id){
  let resultado = arrayEquipamiento.filter(elm => elm.id == id)
  console.log(resultado[0])
  arrayCarrito.push(resultado[0])
  renderizarCarrito(resultado)  
}

//                                                                          RENDERIZAR EQUIPAMIENTO

const carritoRenderizado = document.getElementById("listadoCarrito")

function renderizarCarrito(obj) {
  obj.forEach(obj =>{
    const listado = document.createElement("li")
    listado.className = "listadoProductos"
    listado.innerHTML += `<li>${obj.nombre}</li>`
    carritoRenderizado.appendChild(listado)
  })  
}
//                                                                      RENDERIZAR BARCOS

function renderizarCarritoBarcos(obj) {
  obj.forEach(obj =>{
    const listado = document.createElement("li")
    listado.className = "listadoProductos"
    listado.innerHTML += `<li>${obj.tipo}</li>`
    carritoRenderizado.appendChild(listado)
  })  
}


                                                            // CALCULAR TOTAL DEL CARRITO

const totalEnModal = document.getElementById("totalEnModal")

function calcularCarrito(){
 let total = arrayCarrito.reduce((acc, elemento) => acc + elemento.precio, 0)
 const textoModal = document.createElement("p")
 textoModal.innerText = "El total de su alquiler es de pesos " + total
 totalEnModal.appendChild(textoModal)
}

                                                            

const botonConfirmarAlquiler = document.getElementById("botonConfirmarAlquiler")
  botonConfirmarAlquiler.addEventListener("click", ()=>{
    guardarCarrito()
    carritoRenderizado.innerHTML = ""
    totalEnModal.innerText = ""
    arrayCarrito.splice(0, arrayCarrito.length)      
  })

function borrarListado() {
  carritoRenderizado.innerHTML = ""
  totalEnModal.innerText = ""
  
}  

const botonCancelar = document.getElementById("botonCancelar")
botonCancelar.addEventListener("click", ()=>{
   arrayCarrito.splice(0, arrayCarrito.length)
   borrarListado()
})

const botonContinuar = document.getElementById("botonContinuar")
botonContinuar.addEventListener("click", ()=>{
  calcularCarrito()
})

//                                                                LOCALSTORAGE DEL CARRITO CON JSON

function guardarCarrito(){  
  const  ultimoCarrito = JSON.stringify(arrayCarrito)
  localStorage.setItem("ultimoCarrito", ultimoCarrito)

}

const recuperoCarrito = JSON.parse(localStorage.getItem("ultimoCarrito"))


function calcularCarritoAnterior(){
  let total = recuperoCarrito.reduce((acc, elemento) => acc + elemento.precio, 0)
  return console.log("El total es de su alquiler es de $ " + total) 
 }
 


//                                     PREGUNTAR SI DESEA REPETIR EL ULTIMO ALQUILER EFECTUADO CADA VEZ QUE INGRESAS AL SITIO

// if (JSON.parse(localStorage.getItem("ultimoCarrito"))){
//   let pregunta = prompt("Desea repetir el alquiler si o no")
//   switch (pregunta.toLowerCase()) {
//     case "si":
//             calcularCarritoAnterior()
//       break;
  
//     default:
//       console.log("bienvenido al nautico virtual")
//       break;
//   }

// } else{
//     console.log("bienvenido al nautico virtual")
// }



    




//                                  EL CALENDARIO LO VOY A DEJAR PARA EL FINAL, SEGUN COMO VENGA CON EL PROYECTO

// //                              SELECCIONAR DIA DEL MES

// const calendario = []
// const reservas = []
// let trueFalse = true 

// for(let i = 1; i <= 31; i++){
//       calendario.push(i)
//       console.log(calendario)
//   } 


//     function preguntar1() {     
//         let diaDesde = parseInt(prompt("Elegi un dia del mes"))      
//         while (diaDesde <= 0 || diaDesde > 31){
//             console.log("Ese dia no esta disponible")
//             diaDesde = parseInt(prompt("Debe elegir un día dentro del calendario"))
//         }
//         if (reservas.includes(diaDesde)){
//             return console.log("fecha ocupada")
//         } else {         
//          return diaDesde                
//     }
//     }
        
//     function preguntar2(){
//        let diaHasta = parseInt(prompt("Elija hasta que día desea alquilar"))
//         if (diaHasta <= diaDesde || diaHasta > 31){
//             console.log("Debe elegir una fecha dentro del calendario")
//             diaHasta = parseInt(prompt("elija nuevamente hasta que día desea alquilar"))
//         } else {
//             return diaHasta          
             
//         }
//         }
        
//     function quitarCalendario() {        
//         return calendario.splice(indexDesde, indexHasta)   
       
//         }     

       
// let diaDesde = preguntar1()


// let diaHasta = preguntar2()

// let indexDesde = calendario.indexOf(diaDesde)

// let indexHasta = (diaHasta - diaDesde) + 1

// quitarCalendario()



// function ocuparReserva () {
//     for ( i = diaDesde; i <= diaHasta; i++) {
//         reservas.push(i);        
//     }
//     if (calendario.includes(diaDesde || diaHasta)){
//         alert("La fecha esta ocupada")
//     } else{
//         console.log("Reserva completada")
//     }
// }
// let ocupadoHasta = ocuparReserva()
// console.log(calendario)
// console.log(reservas)


                        //CALENDARIO DE M A R T I N I A N O!!!!!!!!!!!!!!!!!!!!!!!!!!!


// const calendario = []
// const reservas = []
// let trueFalse = true

// const result = {
//     diaDesde: "",
//     diaHasta: "",
// }

// for (let i = 1; i <= 31; i++) {
//     calendario.push(i)
//     console.log(calendario)
// }


// function preguntar1() {
//     let diaDesde = parseInt(prompt("Elegi un dia del mes"))
//     while ((diaDesde <= 0) && (diaDesde > 31)) {
//         console.log("Ese dia no esta disponible")
//         diaDesde = parseInt(prompt("Debe elegir un día dentro del calendario"))
//     }
//     if (reservas.includes(diaDesde)) {
//         return console.log("fecha ocupada")
//     } else {
//         result.diaDesde = diaDesde
//     }
// }
// debugger
// preguntar1()

// function preguntar2() {
//     let diaHasta = parseInt(prompt("Elija hasta que día desea alquilar"))
//     if ((diaHasta <= result.diaDesde) && (diaHasta > 31)) {
//         console.log("Debe elegir una fecha dentro del calendario")
//         diaHasta = parseInt(prompt("elija nuevamente hasta que día desea alquilar"))
//     } else {
//         result.diaHasta = diaHasta

//     }
// }
// preguntar2()

// function quitarCalendario() {
//     return calendario.splice(indexDesde, indexHasta)

// }




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