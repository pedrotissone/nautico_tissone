
//                                  ARRAYS PARA TRABAJAR EL CALENDARIO

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


//  EN ESTA VARIABLE ESTA EL FECHA Y HORA CONFIGURADO EN MI COMPUTADORA
let currentDate = new Date();

// OBTENGO DIA DEL MES EN CURSO
let currentDay = currentDate.getDate()  

// OBTENGO NUMERO DE MES EN CURSO (ENERO ES EL 0)
let monthNumber = currentDate.getMonth()

// VARIABLE PARA QUE NO ME RESALTE EL DIA ACTUAL EN TODOS LOS MESES DEL CALENDARIO
let mesDeComparacion = currentDate.getMonth()

// OBTENGO AÑO EN CURSO
let currentYear = currentDate.getFullYear()

console.log(currentDay + "--" + monthNumber + "--" + currentYear)

//VARIABLE PARA NO PERMITIR ELEGIR MAS DE UN DIA, AL CAMBIAR SU VALOR A FALSE
let trueOfalse = true

// ME CONECTO CON LOS ELEMENTOS HTML

let prevMonthDOM = document.getElementById("prev-month")
let month = document.getElementById("month")
let year = document.getElementById("year")
let nextMonthDOM = document.getElementById("next-month")
let dates = document.getElementById("dates")

//           GENERO MES Y AÑO ACTUAL DE FORMA DINAMICA

month.textContent = monthNames[monthNumber];
// POR PRECAUCION LO PASO A STRING, NO SE SI ES NECESARIO
year.textContent = currentYear.toString()

//                     CREO EVENTOS PARA LLAMAR A LAS FUNCIONES

prevMonthDOM.addEventListener("click", ()=> lastMonth())
nextMonthDOM.addEventListener("click", ()=> nextMonth())

writeMonth(monthNumber)

//                      F U N C I O N E S

// PARA GENERAR LOS DIAS DE CADA MES
function writeMonth(month) {
    // ciclo for para que se acomoden los dias del calendario al cambiar el mes
    for(let i = startDay(); i>0; i--){
        dates.innerHTML += `<div class="calendar__dates calendar__item calendar__lastDays">
        ${getTotalDays(monthNumber-1)-(i-1)} 
        </div>`// Con esto me aparecen los dias del mes anterior para completar la semana
    }

    for( let i = 1; i <= getTotalDays(month); i++){
        if(i === currentDay && mesDeComparacion == currentDate.getMonth()){ //marco con un color diferente el dia en el que estamos (calendar__today)
        dates.innerHTML += `<div class="calendar__dates calendar__item calendar__today diaSeleccionable" id="today">${i}</div>` // LE DOY UN ID DINAMICO
    } else{
        dates.innerHTML += `<div class="calendar__dates calendar__item diaSeleccionable" id="${i}/${monthNumber + 1}/${currentYear}">${i}</div>` // LE DOY UN ID DINAMICO
    }
    }
}



// PARA SABER CUANTOS DÍAS VA A TENER CADA MES
function getTotalDays(month) {
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10){
        return 30;
    } else{
        return isLeap() ? 29:28;
    }    
}

// PARA SABER SI EL AÑO ES BISIESTO
function isLeap() {
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
    
}


// PARA SABER EN QUE DIA DE LA SEMANA COMIENZA EL MES
function startDay() {
    let start = new Date(currentYear, monthNumber, 1) // Me indica en que dia de la semana cae el dia designado, en este caso es el 1.
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1 //  Hago que el 0 sea el Lunes y el Domingo 6 si el dia es Domingo y si es otro le resto 1

}

// PARA PASAR AL MES ANTERIOR
function lastMonth() {
    if (monthNumber !== 0 ) {
        monthNumber--;
    } else {
        monthNumber = 11;
        currentYear--;
    }
    setNewDate();
}

// PARA PASAR AL SIGUIENTE MES
function nextMonth() {
    if (monthNumber !== 11 ) {
        monthNumber++;
    } else {
        monthNumber = 0;
        currentYear++;
    }
    setNewDate();
     
}

// ESTABLECE LA NUEVA FECHA AL MOVER EL CALENDARIO?
function setNewDate() {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = "" // vaciamos el contenido para que no me aparezca el calendario anterior arriba
    writeMonth(monthNumber)
    //ME CONECTO CON EL ELEMENTO HTML CADA VEZ QUE CAMBIO DE MES PARA QUE ME CONECTE CON LOS DIAS DEL MES EN CUESTION    
    diaElegido = document.querySelectorAll(".diaSeleccionable")
    // VUELVO A AGREGARLE EL EVENTO CLICK A LOS NUEVOS VALORES DE LA VARIABLE DIA ELEGIDO(SI NO, NO PUEDO RESERVAR EN OTROS MESES)
    diaElegido.forEach(elm => {
        elm.addEventListener("click", (e) => {
          if(trueOfalse == false){
            Swal.fire({
                icon: "warning",
                title: "No puede seleccionar más de un día de alquiler",      
              })
          } else if(elm.className == "diaOcupado"){
              Swal.fire({
                icon: "warning",
                title: "El día está ocupado",      
              })
          } else if((monthNumber < mesDeComparacion) || (elm.innerHTML < currentDay && monthNumber <= mesDeComparacion)){ // No puede elegirse un dia que ya haya pasado
                Swal.fire({
                    icon: "warning",
                    title: "Ese día ya no se encuentra disponible",      
                  })               
            }else {
            trueOfalse = false
            elm.className = "diaOcupado"
            let resultado = e.target.id
            let precioFinal = localStorage.getItem("precioFinal")//Me traigo el último carrito a través del LocalStorage
            let productosSeleccionados = JSON.parse(localStorage.getItem("ultimoCarrito"))
            productosSeleccionados.forEach(elem => {
                arrayProductos.push(elem.nombre)            
            });      
            Swal.fire({
                icon: "success",
                title: "Se realizó con éxito la reserva de la fecha "  + resultado,
                html:  `<p style= "text-decoration: underline;"><b>PRODUCTOS SELECCIONADOS</b></p>`+ `<p style= "padding: 10px; text-transform: uppercase;"><b>${arrayProductos.join("<br>")}</b></p>` +
                    `<p style= "padding: 10px;"><b> TOTAL: $${precioFinal}</b></p>`
              })
            guardarFecha(resultado)
        }    
        })
        })
    if (localStorage.length !== 0){ //Recupero los dias del LocalStorage cada vez que cambio el mes
        recuperarFecha()    
    }else{
    
    }
}

//                                                   SELECCIONAR DIA DE ALQUILER Y GUARDAR EN EL LOCALSTORAGE LOS MISMOS

// ME CONECTO CON LOS DIVS QUE TIENEN LOS DIAS DEL MES
let diaElegido = document.querySelectorAll(".diaSeleccionable")




function guardarFecha(param) {
    let fechaReservada = localStorage.setItem(`${param}`, param )
}

// RECUPERO LAS FECHAS ALQUILADAS DEL LOCALSTORAGE PARA QUE NO PUEDAN SELECCIONARSE

function recuperarFecha() {
    for (i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i)
        diaElegido.forEach(elm =>{
            if(elm.id == x){
                elm.className = "diaOcupado"
            }
        })

    }
}

// PREGUNTO CADA VEZ QUE ENTRO A LA PAGINA SI EL LOCALSTORAGE ESTA VACIO PARA RECUPERAR LOS DIAS YA ALQUILADOS

if (localStorage.length !== 0){
    recuperarFecha()    
}else{

}

//                                      AL HACER CLICK LES CAMBIO LA CLASE PARA QUE NO PUEDAN VOLVER A SELECCIONARSE

// Creo este array para traerme ahí el último carrito guardado en el LocalStorage
let arrayProductos = []

diaElegido.forEach(elm => {
  elm.addEventListener("click", (e) => {
    if(trueOfalse == false){
        Swal.fire({
            icon: "warning",
            title: "No puede seleccionar más de un día de alquiler",      
          })
    } else if(elm.className == "diaOcupado"){
        Swal.fire({
            icon: "warning",
            title: "El día está ocupado",      
          })
    }else if(monthNumber <= mesDeComparacion && elm.innerHTML < currentDay){ // No puede elegirse un dia que ya haya pasado
        Swal.fire({
            icon: "warning",
            title: "Ese día ya no se encuentra disponible",      
          })               
    }else{
        trueOfalse = false
        elm.className = "diaOcupado"
        let resultado = e.target.id
        let precioFinal = localStorage.getItem("precioFinal")//Me traigo el último carrito a través del LocalStorage
        let productosSeleccionados = JSON.parse(localStorage.getItem("ultimoCarrito"))
        productosSeleccionados.forEach(elem => {
            arrayProductos.push(elem.nombre)            
        });      
        Swal.fire({
            icon: "success",
            title: "Se realizó con éxito la reserva de la fecha "  + resultado,
            html:  `<p style= "text-decoration: underline;"><b>PRODUCTOS SELECCIONADOS</b></p>`+ `<p style= "padding: 10px; text-transform: uppercase;"><b>${arrayProductos.join("<br>")}</b></p>` +
                `<p style= "padding: 10px;"><b> TOTAL: $${precioFinal}</b></p>`
          })
        guardarFecha(resultado)
    }    
})
})