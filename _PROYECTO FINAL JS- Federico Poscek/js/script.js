// ------------------- OBJETOS CONSTRUCTORES: 

    // defino el objeto constructor del usuario
function Usuario (id, nombre, apellido, mail, telefono) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.telefono = telefono;
}

    // defino el objeto constructor de los datos de la simulación del usuario
function SimulacionUsuario (cantidadCuotas, interesPrestamo, totalPrestamo, promedioDeCuotas) {
    this.cantidadCuotas = cantidadCuotas;
    this.interesPrestamo = interesPrestamo;
    this.simulacionTotalPrestamo = parseFloat(totalPrestamo);
    this.promedioDeCuotas = promedioDeCuotas;
}



// // ------------------- VALIDADORES
//     // para que cuando se va de focus salte la función validadora de cada campo
document.getElementById("txtNombreUsuario").onchange = function() {validacionesNombre()};
document.getElementById("txtApellidoUsuario").onchange = function() {validacionesApellido()};
document.getElementById("txtMailUsuario").onchange = function() {validacionesMail()};
document.getElementById("numTelUsuario").onchange = function() {validacionesTelefono()};
document.getElementById("numCuotas").onchange = function() {validacionesCuotas()};
document.getElementById("numMonto").onchange = function() {validacionesMonto()};

    // función que valida los formularios
function validacionesNombre(){
    var popupNombre = document.getElementById("popupNombre");
        // Regex para que machee solo caracteres alfanuméricos y espacios
    var alphanumericRgex = /^[\w ]+$/;

        // Validación del nombre OK
    if(alphanumericRgex.test(txtNombreUsuario.value)) {
        txtNombreUsuario.style.border = "2px solid #1bc43f";
        $('PopupShowHide').show(popupNombre.classList.remove("show"));
            console.log("Nombre: está OK");
    }   
        // Validación del nombre vacío
    if(txtNombreUsuario.value == "") {
        txtNombreUsuario.focus();
        txtNombreUsuario.style.border = "2px solid #ff1e27";
        popupNombre.innerHTML = "El nombre es obligatorio";
        $('PopupShowHide').show(popupNombre.classList.remove("show"));
        $('PopupShowHide').show(popupNombre.classList.add("show"));
            console.log("Nombre: vacío");
        return false;
    }
        // Validación del nombre que contenga caracteres alfanuméricos y espacios
    if(!alphanumericRgex.test(txtNombreUsuario.value)) {
        txtNombreUsuario.focus();
        txtNombreUsuario.style.border = "2px solid #ff1e27";
        popupNombre.innerHTML = "Solo letras y/o números";
        $('PopupShowHide').show(popupNombre.classList.remove("show"));
        $('PopupShowHide').show(popupNombre.classList.add("show"));
            console.log("Nombre: solo alfanuméricos");
        return false;
    } else {
        $('PopupShowHide').show(popupNombre.classList.remove("show"));
    return true;    
    }
}

function validacionesApellido(){
    var popupApellido = document.getElementById("popupApellido");
        // Regex para que machee solo caracteres alfanuméricos y espacios
    var alphanumericRgex = /^[\w ]+$/;
 
        // Validadción del apellido OK
    if(alphanumericRgex.test(txtApellidoUsuario.value)) {
        txtApellidoUsuario.style.border = "2px solid #1bc43f";
        $('PopupShowHide').show(popupApellido.classList.remove("show"));
            console.log("Apellido: está OK");
    }
        // Validadción del apellido vacío
    if(txtApellidoUsuario.value == "") {
        txtApellidoUsuario.focus();
        txtApellidoUsuario.style.border = "2px solid #ff1e27";
        popupApellido.innerHTML = "El apellido es obligatorio";
        $('PopupShowHide').show(popupApellido.classList.remove("show"));
        $('PopupShowHide').show(popupApellido.classList.add("show"));
            console.log("Apellido: vacío");
        return false;
    } 
        // Validación del apellido que contenga caracteres alfanuméricos y espacios
    if((!alphanumericRgex.test(txtApellidoUsuario.value))) {
        txtApellidoUsuario.focus();
        txtApellidoUsuario.style.border = "2px solid #ff1e27";
        popupApellido.innerHTML = "Solo letras y/o números";
        $('PopupShowHide').show(popupApellido.classList.remove("show"));
        $('PopupShowHide').show(popupApellido.classList.add("show"));
            console.log("Apellido: solo alfanuméricos");
        return false;
    } else {
        $('PopupShowHide').show(popupApellido.classList.remove("show"));
    return true;    
    }
}

function validacionesMail(){
    var popupMail = document.getElementById("popupMail");
        // Regex para el mail
    var mailRgex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // Validadción del mail OK
    if((mailRgex.test(txtMailUsuario.value))) {
        txtMailUsuario.style.border = "2px solid #1bc43f";
        $('PopupShowHide').show(popupMail.classList.remove("show"));
        console.log("Mail: está OK");
    }
        // Validadción del mail vacío
    if(txtMailUsuario.value == "") {
        txtMailUsuario.focus();
        txtMailUsuario.style.border = "2px solid #ff1e27";
        popupMail.innerHTML = "El mail es obligatorio";
        $('PopupShowHide').show(popupMail.classList.remove("show"));
        $('PopupShowHide').show(popupMail.classList.add("show"));
            console.log("Mail: vacío");
        return false;
    } 
        // Validación del mail correcto
    if((!mailRgex.test(txtMailUsuario.value))) {
        txtMailUsuario.focus();
        txtMailUsuario.style.border = "2px solid #ff1e27";
        popupMail.innerHTML = "Mail invalido: Ej.:usuario@mail.com";
        $('PopupShowHide').show(popupMail.classList.remove("show"));
        $('PopupShowHide').show(popupMail.classList.add("show"));
            console.log("Mail: inválido");
        return false;
    } else {
        $('PopupShowHide').show(popupMail.classList.remove("show"));
    return true;    
    }
}

function validacionesTelefono(){
    var popupTelefono = document.getElementById("popupTelefono");
        // Regex para el teléfono
    var telRgex = /^([0-9]{5})+(-){0,1}([0-9]{5})$/i;

        // Validadción del Teléfono OK
    if((telRgex.test(numTelUsuario.value))) {
        numTelUsuario.style.border = "2px solid #1bc43f";
        $('PopupShowHide').show(popupTelefono.classList.remove("show"));
        console.log("Teléfono: está OK");
    }
        // Validadción del Teléfono vacío
    if(numTelUsuario.value == "") {
        numTelUsuario.focus();
        numTelUsuario.style.border = "2px solid #ff1e27";
        popupTelefono.innerHTML = "El teléfono es obligatorio";
        $('PopupShowHide').show(popupTelefono.classList.remove("show"));
        $('PopupShowHide').show(popupTelefono.classList.add("show"));
            console.log("Teléfono: vacío");
        return false;
    } 
        // Validación del Teléfono correcto
    if((!telRgex.test(numTelUsuario.value))) {
        numTelUsuario.focus();
        numTelUsuario.style.border = "2px solid #ff1e27";
        popupTelefono.innerHTML = "Teléfono invalido. ej. 1560674334";
        $('PopupShowHide').show(popupTelefono.classList.remove("show"));
        $('PopupShowHide').show(popupTelefono.classList.add("show"));
            console.log("Teléfono: inválido");
        return false;
    } else {
        $('PopupShowHide').show(popupTelefono.classList.remove("show"));
    return true;    
    }
}


function validacionesCuotas(){
    var popupCuotas = document.getElementById("popupCuotas");
        // Validación del monto OK
        if(numCuotas.value>=3 && numCuotas.value<=72){
            numCuotas.style.border = "2px solid #1bc43f";
            $('PopupShowHide').show(popupCuotas.classList.remove("show"));
                console.log("Cuotas: está OK");
        }   
        // Validación del monto mal
        if(numCuotas.value<3 || numCuotas.value>72){
            numCuotas.focus();
            numCuotas.style.border = "2px solid #ff1e27";
            popupCuotas.innerHTML = "Ingresá entre 3 y 72 cuotas";
            $('PopupShowHide').show(popupCuotas.classList.remove("show"));
            $('PopupShowHide').show(popupCuotas.classList.add("show"));
                console.log("Cuotas: son menos de 3 o más de 72!");
            return false;
        } 
            // Validación del monto vacío
        if(numCuotas.value == "") {
            numCuotas.focus();
            numCuotas.style.border = "2px solid #ff1e27";
            popupCuotas.innerHTML = "Las cuotas son obligatorias";
            $('PopupShowHide').show(popupCuotas.classList.remove("show"));
            $('PopupShowHide').show(popupCuotas.classList.add("show"));
                console.log("Cuotas: vacío");
            return false;
        } else {
            $('PopupShowHide').show(popupCuotas.classList.remove("show"));
        return true;    
    }
}


function validacionesMonto(){
    var popupMonto = document.getElementById("popupMonto");
        // Regex para el monto
    var montoRgex = /^([0-9])*$/;

        // Validación del monto OK
        if(montoRgex.test(numMonto.value)) {
            numMonto.style.border = "2px solid #1bc43f";
            $('PopupShowHide').show(popupMonto.classList.remove("show"));
                console.log("Monto: está OK");
        }   
            // Validación del monto vacío
        if(numMonto.value == "") {
            numMonto.focus();
            numMonto.style.border = "2px solid #ff1e27";
            popupMonto.innerHTML = "El monto es obligatorio";
            $('PopupShowHide').show(popupMonto.classList.remove("show"));
            $('PopupShowHide').show(popupMonto.classList.add("show"));
                console.log("Monto: vacío");
            return false;
        }
            // Validación del monto que contenga solo números
        if(!montoRgex.test(numMonto.value)) {
            numMonto.focus();
            numMonto.style.border = "2px solid #ff1e27";
            popupMonto.innerHTML = "Solo números";
            $('PopupShowHide').show(popupMonto.classList.remove("show"));
            $('PopupShowHide').show(popupMonto.classList.add("show"));
                console.log("Monto: solo números");
            return false;
        } else {
            $('PopupShowHide').show(popupMonto.classList.remove("show"));
        return true;    
    }
}

// ------------------- FIN VALIDADORES



// ------------------- BOTONES

    // llamo al boton para calcular las simulaciones y animaciones de los formularios
        // version JQuery
$("#enviarCalculo").click(function(e) {
    e.preventDefault();   
    if (validacionesNombre() && validacionesApellido() && validacionesMail() && validacionesTelefono() && validacionesCuotas() && validacionesMonto()) {
        
    $("#Simulaciones").hide().show(300, function() {
            // llamo a la función para que muestre las simulaciones de forma animada
        escribeSimulaciones(),
            // llamo a la función para que me limpie los campos y pueda hacer una nueva simulación
        $("#txtNombreUsuario, #txtApellidoUsuario, #txtMailUsuario, #numTelUsuario, .Contacto-label").hide('swing'),
            // función para escribir los datos del usuario tomados previamente
        escribeAgradecimiento();
            // función para que me limpie los campos y pueda hacer una nueva simulación
        limpiarFormulario();
        limpiarValidos();
            // desaparezco el botón de "Calcular Presatamo" y aparece el de "¿Una simulación más?" y el de "Reiniciar Simulación"
        ocultarYMostrarBotones();
    })    
   } else {
       console.log("error");
   }
});


// Botón para enviar los calculos una vez superada la etapa de ingreso de datos del usuario y seguir simulando
$("#enviarOtroCalculo").click(function(e) {
    e.preventDefault();   
    if (validacionesCuotas() && validacionesMonto()) {
        
    $("#Simulaciones").hide().show(300, function() {
            // llamo a la función para que muestre las simulaciones de forma animada
        escribeSimulaciones_unaMas(),
        limpiarFormulario();
        limpiarValidos();
    })    
   } else {
       console.log("error");
   }
});
    // llamo al boton para reiniciar todas las simulaciones
    // cambio a JQuery y sintetizo todo en la misma función
$("#reiniciarCalculo").click( function() {
    location.reload();
});

// OCULTAR y MOSTRAR Botones
function ocultarYMostrarBotones() {
    // desaparezco el botón de "Calcular Presatamo" y aparece el de "¿Una simulación más?" y el de "Reiniciar Simulación"
    var botonEnvio = document.getElementById("enviarCalculo");
    var botonReEnvio = document.getElementById("enviarOtroCalculo");
    var botonReinicio = document.getElementById("boton-reiniciarCalculo");
    botonEnvio.style.display = "none";
    botonReEnvio.style.display = "block";
    botonReinicio.style.display = "block";
}

// ------------------- FIN BOTONES



// ------------------- CALCULOS

    // Defino las variables que necesito

    // seteo la fecha del día    
var fechaHoy = new Date();
var dd = String(fechaHoy.getDate()).padStart(2, '0');
var mm = String(fechaHoy.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = fechaHoy.getFullYear();
fechaHoy = dd + '/' + mm + '/' + yyyy;

var promedioDeCuotas;
var interesPrestamo;
var totalPrestamo = null;
var cuotas;
var nuevaSimulacionUsuario;
    // Inicializo el id en 0 para poder llamar luego a imprimir desde los id's en el localStorage.
var id = 0;

// CALCULO DE CUOTA: 

var interes = [1.2, 1.3, 1.5, 1.7, 2.1, 2.3, 2.5];

// calculo la cantidad de interés según el monto y la cantidad de cuotas
function calcularPrestamo() {

        // tomo la cantidad de cuotas y el monto de los input hechos por el usuario:
    var cuotas = parseInt($("#numCuotas").val());
    var monto = parseInt($("#numMonto").val());

    if (cuotas>=3 && cuotas<=6) {
        interesPrestamo = interes[0]
        totalPrestamo = monto * interesPrestamo;
    }
    else if (cuotas>=7 && cuotas<=9) {
        interesPrestamo = interes[1]
        totalPrestamo = monto * interesPrestamo;
    }
    else if (cuotas>=10 && cuotas<=12) {
        interesPrestamo = interes[2]
        totalPrestamo = monto * interesPrestamo;
    }
    else if (cuotas>=13 && cuotas<=24) {
        interesPrestamo = interes[3]
        totalPrestamo = monto * interesPrestamo;
    }
    else if (cuotas>=25 && cuotas<=36) {
        interesPrestamo = interes[4]
        totalPrestamo = monto * interesPrestamo;
    }
    else if (cuotas>=37 && cuotas<=72) {
        interesPrestamo = interes[5]
        totalPrestamo = monto * interesPrestamo;
    }
    else {
        console.log("Hay un error en el cálculo de tu cuota");
    }
    totalPrestamo = totalPrestamo.toFixed(2);
    return totalPrestamo; 
}


// ------------------- FIN CALCULOS



// ------------------- DOM

// función que escribe los datos en el DOM y me los guarda en el local Storage.
function escribeSimulaciones() {
        // version JQuery
    var id = 0;
    var nombre = $("#txtNombreUsuario").val();
    var apellido = $("#txtApellidoUsuario").val();
    var mail = $("#txtMailUsuario").val();
    var telefono = $("#numTelUsuario").val();
    
        // guardo los datos del objeto usuario en una variable
    var nuevoUsuario = new Usuario(id, nombre, apellido, mail, telefono);

        // me guardo en una variable la cantidad de cuotas ingresadas.
    var cuotas = parseInt($("#numCuotas").val());

        // Ejecuto la función para calcular
    calcularPrestamo();

        // Variable para sacar el promedio de cada cuota.
    var promedioDeCuotas = parseFloat((totalPrestamo / cuotas).toFixed(2));
    var totalEnDolares = parseFloat((totalPrestamo / dolarVenta).toFixed(2));

        // creo elemento <div>
    let div = document.createElement('div');
    
        //agrego el HTML al div
    div.innerHTML += `
    <button class="Boton-borrar" id="borrarSimulacion${nuevoUsuario.id}" type="reset";">X</button>
    Cantidad de cuotas: <span class="containerInfoBold">${cuotas}.</span>
    <br>
    Interés: <span class="containerInfoBold">${interesPrestamo}%.</span>
    <br>
    Total del prestamo: <span class="containerInfoBold">$ ${totalPrestamo}.-</span>
    <br>
    Cuota promedio: <span class="containerInfoBold">$ ${promedioDeCuotas}.-</span>
    <br>
    <div>
        <div class="textoBajadaBold">Equivalente en dolares: U$S ${totalEnDolares}.-   
        </div>
        <div id="text" class="textoBajada">La cotización al ${fechaHoy} es: COMPRA: $ ${dolarCompra}, VENTA: $ ${dolarVenta};.
        </div>
    </div>
    <hr class="separador";>
    `;

    $("#Simulaciones").prepend(div);


    // variable para el boton de borrar simulacion
    let botonEliminar = document.getElementById(`borrarSimulacion${nuevoUsuario.id}`);
       
    // llamo al boton de eliminar y que me elimine el div creado
    $(botonEliminar).click( function() {
        botonEliminar.parentElement.remove()
    });

        // me guardo todos los datos de la simulación del usuario en una variable
    var nuevaSimulacionUsuario = new SimulacionUsuario (cuotas, interesPrestamo, totalPrestamo, promedioDeCuotas);
    console.log(nuevaSimulacionUsuario);

// local STORAGE
        // lo paso a Json así lo puedo grabar como un string
    var simulacionJSON = JSON.stringify(nuevaSimulacionUsuario);
        // lo guardo en el localStorage
    localStorage.setItem("Simulacion de: " + nombre, simulacionJSON);
    var pepe = [];

    pepe.push(cuotas);
    console.log("this is pepe " + pepe);

}



function escribeSimulaciones_unaMas() {
    var newid = id++;
    console.log(newid);

        // guardo los datos del objeto usuario en una variable (solo el id)
    var nuevoUsuario = new Usuario(id);
    console.log(nuevoUsuario);

        // me guardo en una variable la cantidad de cuotas ingresadas
    var cuotas = parseInt($("#numCuotas").val());

        // Ejecuto la función para calcular
    calcularPrestamo();

        // Variable para sacar el promedio de cada cuota.
    var promedioDeCuotas = parseFloat((totalPrestamo / cuotas).toFixed(2));
    var totalEnDolares = parseFloat((totalPrestamo / dolarVenta).toFixed(2));

        // creo elemento <div>
    let div = document.createElement('div');

        //agrego el HTML al div
        div.innerHTML += `
        <button class="Boton-borrar" id="borrarSimulacion${nuevoUsuario.id}" type="reset";">X</button>
        Cantidad de cuotas: <span class="containerInfoBold">${cuotas}.</span>
        <br>
        Interés: <span class="containerInfoBold">${interesPrestamo}%.</span>
        <br>
        Total del prestamo: <span class="containerInfoBold">$ ${totalPrestamo}.-</span>
        <br>
        Cuota promedio: <span class="containerInfoBold">$ ${promedioDeCuotas}.-</span>
        <br>
        <div>
            <div class="textoBajadaBold">Equivalente en dolares: U$S ${totalEnDolares}.-   
            </div>
            <div id="text" class="textoBajada">La cotización al ${fechaHoy} es: COMPRA: $ ${dolarCompra}, VENTA: $ ${dolarVenta};.
            </div>
        </div>
        <hr class="separador";>
        `;
 
        // agrego el div creado al contenedor para ordenar el último primero
    $("#Simulaciones").prepend(div);


        // variable para el boton de borrar simulacion
    let botonEliminar = document.getElementById(`borrarSimulacion${nuevoUsuario.id}`);

        // llamo al boton de eliminar y que me elimine el div creado
    $(botonEliminar).click( function() {
        botonEliminar.parentElement.remove()
        });

        // me guardo todos los datos de la simulación del usuario en una variable
    var nuevaSimulacionUsuario = new SimulacionUsuario (cuotas, interesPrestamo, totalPrestamo, promedioDeCuotas);
    console.log(nuevaSimulacionUsuario);

    // local STORAGE
        // lo paso a Json así lo puedo grabar como un string
    var simulacionJSON = JSON.stringify(nuevaSimulacionUsuario);
        // lo guardo en el localStorage
    localStorage.setItem("Simulacion de: " + id, simulacionJSON);
}




// función para escribir los datos del usuario
function escribeAgradecimiento() {
        // tomo los datos personales de los input hechos por el usuario
    var id;
    var nombre = $("#txtNombreUsuario").val();
    var apellido = $("#txtApellidoUsuario").val();
    var mail = $("#txtMailUsuario").val();
    var telefono = $("#numTelUsuario").val();

        // guardo los datos del objeto usuario en una variable
    var nuevoUsuario = new Usuario(id, nombre, apellido, mail, telefono);
    console.log(nuevoUsuario)

        // Variable para guardar las simulaciones e imprimirlas en pantalla
    var agradecimiento = $('#Gracias');

        // creo elemento <div>
    let div = document.createElement('div');

        //agrego el HTML al div
    div.innerHTML = `
        <div class="containerAgradecimiento">
        Gracias <span class="containerInfoBold"> ${nuevoUsuario.nombre} ${nuevoUsuario.apellido}.</span>
        <br>
        Nos estaremos comunicando con vos por mail a:
        <span class="containerInfoBold"> ${nuevoUsuario.mail}.</span>
        <br>
        O por teléfono a:
        <span class="containerInfoBold"> ${nuevoUsuario.telefono}.</span>
        <br>
        <hr style="border:1px solid var(--color-principal)";>
        <span class="containerInfoSmall">Seguí haciendo simulaciones o pulsá "Finalizar" para cerrar el simulador.</span>
        <br>
        <br>
        <div style="border-bottom:0.075em solid var(--color-principal)";></div>
        <br>
        </div>
        `;

        // agrego el div creado al contenedor
    $("#Gracias").append(div);
}

// ------------------- FIN DOM



// ------------------- LIMPIEZA FORMULARIOS

    // función para que me limpie los campos y pueda hacer una nueva simulación
function limpiarFormulario() {
$("#form")[0].reset();
}

function limpiarValidos() {
    numMonto.style.border = "2px solid white";
    numCuotas.style.border = "2px solid white";
}

// ------------------- FIN LIMPIEZA FORMULARIOS