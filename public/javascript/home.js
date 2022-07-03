

                                                //C L A S E S

class Barcos{
    constructor(id, nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
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

const equipamiento1 = new Equipamiento(50, "gps garmin", 1000, 3)
const equipamiento2 = new Equipamiento(51, "prismatico", 2000, 2)
const equipamiento3 = new Equipamiento(52, "pinula", 500, 3)
const equipamiento4 = new Equipamiento(53,  "carta nautica", 500, 5)
const equipamiento5 = new Equipamiento(54,"sextante", 2000, 1)
const equipamiento6 = new Equipamiento(55, "bichero", 500, 3)


//                                              A R R A Y S


const arrayBarcos =[barco1, barco2, barco3, barco4, barco5, barco6]

const arrayEquipamiento = [equipamiento1, equipamiento2, equipamiento3, equipamiento4, equipamiento5, equipamiento6]

const arrayCarrito = []



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
    renderizarCarrito(resultado)
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

//                                                                          RENDERIZAR TODOS LOS PRODUCTOS SELECCIONADOS

const carritoRenderizado = document.getElementById("listadoCarrito")

function renderizarCarrito(obj) {
  obj.forEach(obj =>{
    const listado = document.createElement("li")
    listado.className = "listadoProductos"
    listado.innerHTML += `<li>${obj.nombre}</li>`
    carritoRenderizado.appendChild(listado)
  })  
}


                                                            // CALCULAR TOTAL DEL CARRITO Y MANEJO DE BOTONES CANCELAR Y CERRAR

const totalEnModal = document.getElementById("totalEnModal")

function calcularCarrito(){
 let total = arrayCarrito.reduce((acc, elemento) => acc + elemento.precio, 0)
 const textoModal = document.createElement("p")
 textoModal.innerText = "El total de su alquiler es de pesos " + total
 totalEnModal.appendChild(textoModal)
}



function alquilerExitoso() {
  if(arrayCarrito.length != 0){
    Swal.fire({
      icon: "success",
      title: "Alquiler realizado con éxito",
    })  
  } else{
    Swal.fire({
      icon: "error",
      title: "No hay productos seleccionados",
    })
  } 
}                                                            

const botonConfirmarAlquiler = document.getElementById("botonConfirmarAlquiler")
  botonConfirmarAlquiler.addEventListener("click", ()=>{
    guardarCarrito()
    alquilerExitoso()  
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

const botonCerrar = document.getElementById("botonCerrar")
botonCerrar.addEventListener("click", ()=>{
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
                                                                    // RECUPERAR Y RENDERIZAR ULTIMO CARRITO

let ultimoCarrito = JSON.parse(localStorage.getItem("ultimoCarrito"))

const botonVerUltimoAlquiler = document.getElementById("botonVerUltimoAlquiler")

botonVerUltimoAlquiler.addEventListener("click", ()=>{
  renderizarUltimoCarrito(ultimoCarrito)   
})
 

function renderizarUltimoCarrito(obj) {
    obj.forEach(obj =>{
        const listado = document.createElement("li")
        listado.className = "listadoProductos"
        listado.innerHTML += `<li>${obj.nombre}</li>`
        carritoRenderizado.appendChild(listado)
        arrayCarrito.push(obj)
      })
    }
   
                                                                // BOTONES CERRAR Y CANCELAR EN REPETIR ALQUILER
    
  const botonCerrarRepetir = document.getElementById("botonCerrarRepetir")
  botonCerrarRepetir.addEventListener("click", ()=>{
    arrayCarrito.splice(0, arrayCarrito.length)
    borrarListado()
  })

  const botonCancelarRepetir = document.getElementById("botonCancelarRepetir")
  botonCancelarRepetir.addEventListener("click", ()=>{
    arrayCarrito.splice(0, arrayCarrito.length)
    borrarListado()
  })
  
  





// function calcularCarritoAnterior(){
//   let total = recuperoCarrito.reduce((acc, elemento) => acc + elemento.precio, 0)
//   return console.log("El total es de su alquiler es de $ " + total) 
//  }
 


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



