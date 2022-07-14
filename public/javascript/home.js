
                                              // PETICION DE DATOS A TRAVES DE FETCH A UNA API REMOTA SIMULADA

const URL = "public/javascript/listadobarcos.json"

contenidoDOM = document.getElementById("contenidoDOM")

const traerCardsBarcos = (contenido)=>{
  const {poster, nombre, precio, id} = contenido
  return `<div class="card col-6" id="h20">
            <img src="${poster}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">PRECIO: $${precio}.</p>
                <a href="#table" class="btn btn-primary boton-barcos" id="${id}">SELECCIONAR</a>
              </div>
          </div>`
}


 


const obtenerContenido = (URL)=> {
  let cardsAmostrar = ""
  fetch(URL)
  .then((response)=> response.json())
  .then((data)=>{
    for (contenido of data) {
      cardsAmostrar += traerCardsBarcos(contenido)
    }
    contenidoDOM.innerHTML = cardsAmostrar
  })

}

obtenerContenido(URL)

                  // ACA LOGRO LA FUNCIONALIDAD DE LA CLASE BOTON-BARCO QUE HABIA DEJADO DE FUNCIONAR AL TRAER LOS OBJETOS JSON A TRES DE FETCH


document.addEventListener("click", (e)=>{
  if(e.target.classList.contains("boton-barcos")){
    busquedaArrayBarcos(e.target.id)
  }

})



                                                //C L A S E S

class Barcos{
    constructor(id, nombre, precio, cantidad, poster){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.poster = poster  
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
//                       CAMBIO DE COLOR DEL BOTON DE LOS BARCOS AL HACER MOUSEDOWN/UP (DEJO DE FUNCIONAR DESPUES DE USAR EL FETCH)


// let botonColorBarco = document.querySelectorAll(".boton-barcos")
//     botonColorBarco.forEach(btn =>{
//     btn.addEventListener("mousedown",(b)=>{   
//     btn.className = "btn-primary2"
//     })
//     btn.addEventListener("mouseup",(b)=>{   
//     btn.className = "btn-primary"
//       })
//   })







 
//                                       CARGA DE BARCO AL CARRITO (DEJO DE FUNCIONAR DESPUES DE USAR EL FETCH)

// const botonBarcos = document.querySelectorAll(".boton-barcos")

// botonBarcos.forEach(elm => {
//   elm.addEventListener("click", (e) => {
//     let resultado = e.target.id   
//     busquedaArrayBarcos(resultado)
  
//   })
// })


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
    listado.innerHTML += `${obj.nombre}<button type="button" class="btn btn-danger" id="${obj.id}">Eliminar</button>`
    carritoRenderizado.appendChild(listado)
  })
  
}


//                                                              ELIMINAR PRODUCTOS SELECCIONADOS DEL LISTADO


const botonEliminar = document.getElementsByClassName("btn-danger")

document.addEventListener("click", (e)=>{
  if(e.target.classList.contains("btn-danger")){
    busquedaArrayEliminar(e.target.id)
  }


})
function busquedaArrayEliminar(id){
  let resultado = arrayCarrito.findIndex(elm => elm.id == id)
  arrayCarrito.splice(resultado, 1)
  carritoRenderizado.removeChild(carritoRenderizado.children[resultado])  
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
   

  

//                                     MOSTRAR BOTON DE REPETIR ALQUILER SI ES QUE EXISTE ULTIMO CARRITO EN LOCAL STORAGE

if (JSON.parse(localStorage.getItem("ultimoCarrito"))){
  botonVerUltimoAlquiler.className = "btn btn-primary"
}else{
  botonVerUltimoAlquiler.className = "ocultar"
}



