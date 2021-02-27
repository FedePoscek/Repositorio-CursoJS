// OBJETOS CONSTRUCTORES: 

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


    // llamo al boton para calcular las simulaciones y animaciones de los formularios
        // version JQuery
$("#enviarCalculo").click( function(evento) {
    evento.preventDefault();

    $("#Simulaciones").hide().show(300, function() {
        // llamo a la función para que muestre las simulaciones de forma animada
        escribeSimulaciones(),
        // llamo a la función para que me limpie los campos y pueda hacer una nueva simulación
        $("#txtNombreUsuario, #txtApellidoUsuario, #txtMailUsuario, #numTelUsuario, .Contacto-label").hide('swing'),
        // función para escribir los datos del usuario tomados previamente
        escribeAgradecimiento();
        // función para que me limpie los campos y pueda hacer una nueva simulación
        limpiarFormulario();

        // desaparezco el botón de "Calcular Presatamo" y aparece el de "¿Una simulación más?" y el de "Reiniciar Simulación"
        ocultarYMostrarBotones();
    }) 
});


$("#enviarOtroCalculo").click( function(evento) {
    evento.preventDefault();
    $("#Simulaciones").hide().show(300, function() {
        // llamo a la función para que muestre las simulaciones de forma animada
        escribeSimulaciones_unaMas(),
        // función para que me limpie los campos y pueda hacer una nueva simulación
        limpiarFormulario();  
    }) 
});


    // llamo al boton para reiniciar todas las simulaciones
    // cambio a JQuery y sintetizo todo en la misma función
$("#reiniciarCalculo").click( function() {
    location.reload();
});
        // version Vanilla JS
    // var buttonReinicio = document.getElementById("reiniciarCalculo");
    // buttonReinicio.addEventListener("click", reiniciarSimulaciones);


    // Defino las variables que necesito
var promedioDeCuotas;
var interesPrestamo;
var totalPrestamo = null;
var cuotas;
var nuevaSimulacionUsuario;
    // Inicializo el id en 0 para poder llamar luego a imprimir desde los id's en el localStorage.
var id = 0;


// VALIDADORES: 
    // aun sin andar
    // función para validar que se carguen todos los datos, en case de faltar alguno no se habilira el botón de "Calcular prestamo".
function completarCampos() {
    if ((nombre !== "") && (apellido !== "") && (mail !== "") && (telefono !== "")) {
        document.getElementById('enviarCalculo').disabled=false;
        console.log("Los datos son válidos!");
    } else {
        document.getElementById('enviarCalculo').disabled=true;
        console.log("Por favor llená todos los campos del formulario");
    }
}


// BOTONES
function ocultarYMostrarBotones() {
    // desaparezco el botón de "Calcular Presatamo" y aparece el de "¿Una simulación más?" y el de "Reiniciar Simulación"
    var botonEnvio = document.getElementById("enviarCalculo");
    var botonReEnvio = document.getElementById("enviarOtroCalculo");
    var botonReinicio = document.getElementById("boton-reiniciarCalculo");
    botonEnvio.style.display = "none";
    botonReEnvio.style.display = "block";
    botonReinicio.style.display = "block";
}


// CALCULO DE CUOTA: 

var interes = [1.2, 1.3, 1.5, 1.7, 2.1, 2.3, 2.5];

// calculo la cantidad de interés según el monto y la cantidad de cuotas
function calcularPrestamo() {

        // tomo la cantidad de cuotas y el monto de los input hechos por el usuario:
            // version Vanilla JS
        // var cuotas = parseInt(document.getElementById("numCuotas").value);
        // var monto = parseInt(document.getElementById("numMonto").value);
            // version JQuery
    var cuotas = parseInt($("#numCuotas").val());
    var monto = parseInt($("#numMonto").val());

    switch (cuotas) {
        case 3:
            interesPrestamo = interes[0]
            totalPrestamo = monto * interesPrestamo;
            break;
        case 6:
            interesPrestamo = interes[1]
        totalPrestamo = monto * interesPrestamo;
            break;
        case 9:
            interesPrestamo = interes[2]
        totalPrestamo = monto * interesPrestamo;
            break;
        case 12:
            interesPrestamo = interes[3]
            totalPrestamo = monto * interesPrestamo;
            break;
        case 24:
            interesPrestamo = interes[4]
            totalPrestamo = monto * interesPrestamo;
            break;
        case 36:
            interesPrestamo = interes[5]
            totalPrestamo = monto * interesPrestamo;
            break;
        case 72:
            interesPrestamo = interes[6]
            totalPrestamo = monto * interesPrestamo;
            break;
        default:
            cuotas = 3;
            interesPrestamo = interes[0]
            totalPrestamo = monto * interesPrestamo;
            break;
    }
    totalPrestamo = totalPrestamo.toFixed(2);

    return totalPrestamo; 
}



    // función para que me limpie los campos y pueda hacer una nueva simulación
function limpiarFormulario() {
            // version Vanilla JS
            // resetea todos
        // document.getElementById("form").reset();
            // resetea uno en particular
        // document.getElementById("txtNombreUsuario").value = "";
            // version JQuery
    $("#form")[0].reset();
}


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

        // creo elemento <div>
    let div = document.createElement('div');

        //agrego el HTML al div
    div.innerHTML += `
    <button class="Boton-borrar" id="borrarSimulacion${nuevoUsuario.id}" type="reset";">X</button>
    
    Cantidad de cuotas: <span class="containerInfoBold">${cuotas}.</span>
    <br>
    Interés: <span class="containerInfoBold">${interesPrestamo}%.</span>
    <br>
    Total del prestamo: <span class="containerInfoBold">$${totalPrestamo}.-</span>
    <br>
    Cuota promedio: <span class="containerInfoBold">$${promedioDeCuotas}.-</span>
    <br>
    <hr style="border:1px solid var(--color-principal)";>
    `;

    // agrego el div creado al contenedor
            // version Vanilla JS
            // para ordenar el primero primero
        // simulaciones.appendChild(div);
            // para ordenar el último primero
        // simulaciones.prepend(div);
            // version JQuery
        // $("#Simulaciones").append(div);
    $("#Simulaciones").prepend(div);


    // variable para el boton de borrar simulacion
        // version Vanilla JS
    let botonEliminar = document.getElementById(`borrarSimulacion${nuevoUsuario.id}`);
        // version JQuery
        // let botonEliminar = $(`borrarSimulacion${nuevoUsuario.nombre}`);

    // llamo al boton de eliminar y que me elimine el div creado
        // version Vanilla JS
        // botonEliminar.addEventListener('click', ()=>{
        //     botonEliminar.parentElement.remove()
        // });
        // version JQuery
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

        // creo elemento <div>
    let div = document.createElement('div');

        //agrego el HTML al div
    div.innerHTML += `
    <button class="Boton-borrar" id="borrarSimulacion${nuevoUsuario.id}" type="reset";">X</button>

    Cantidad de cuotas: <span class="containerInfoBold">${cuotas}.</span>
    <br>
    Interés: <span class="containerInfoBold">${interesPrestamo}%.</span>
    <br>
    Total del prestamo: <span class="containerInfoBold">$${totalPrestamo}.-</span>
    <br>
    Cuota promedio: <span class="containerInfoBold">$${promedioDeCuotas}.-</span>
    <br>
    <hr style="border:1px solid var(--color-principal)";>
    `;
 
        // agrego el div creado al contenedor para ordenar el último primero
    $("#Simulaciones").prepend(div);


        // variable para el boton de borrar simulacion
            // version Vanilla JS
    let botonEliminar = document.getElementById(`borrarSimulacion${nuevoUsuario.id}`);
            // version JQuery
            // let botonEliminar = $(`borrarSimulacion${nuevoUsuario.nombre}`);

        // llamo al boton de eliminar y que me elimine el div creado
            // version Vanilla JS
            // botonEliminar.addEventListener('click', ()=>{
            //     botonEliminar.parentElement.remove()
            // });
            // version JQuery
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
            // version JQuery
    var id;
    var nombre = $("#txtNombreUsuario").val();
    var apellido = $("#txtApellidoUsuario").val();
    var mail = $("#txtMailUsuario").val();
    var telefono = $("#numTelUsuario").val();

        // guardo los datos del objeto usuario en una variable
    var nuevoUsuario = new Usuario(id, nombre, apellido, mail, telefono);
    console.log(nuevoUsuario)

        // Variable para guardar las simulaciones e imprimirlas en pantalla
            // version Vanilla JS
        // var simulaciones = document.getElementById('Simulaciones');
            // version JQuery
    var agradecimiento = $('#Gracias');

        // creo elemento <div>
    let div = document.createElement('div');

        //agrego el HTML al div
    div.innerHTML = `
        Gracias <span class="containerInfoBold"> ${nuevoUsuario.nombre} ${nuevoUsuario.apellido}!!</span>
        <br>
        Te estaremos enviando el detalle de tus simulaciones a:
        <span class="containerInfoBold"> ${nuevoUsuario.mail} !!</span>
        <br>
        <hr style="border:1px solid var(--color-principal)";>
        <span class="containerInfoSmall">Podés seguir haciendo simulaciones o "Finalizar y Enviar" y te las estaremos enviando a tu mail.</span>
        `;

        // agrego el div creado al contenedor
            // version Vanilla JS
            // para ordenar el primero primero
        // simulaciones.appendChild(div);
            // para ordenar el último primero
        // simulaciones.prepend(div);
            // version JQuery
        // $("#Simulaciones").append(div);
    $("#Gracias").append(div);
}