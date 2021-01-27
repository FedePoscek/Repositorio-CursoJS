/* La idea es armar un calculador de prestamos personales.
. Voy a tomar de referencia el del Banco Galicia, que tiene:
        - Ingreso de cantidad de cuotas (entre 3 y 72 cuotas).
        - Elección de sistema de amortización Francés o Alemán.
        - Ingreso de fecha de pago de la primer cuota.
        - Devuelve el valor de la cuota promedio.
        - Informa la tasa nominal anual.
        - Permite ver todas las cuotas y ahí informa todos los valores (Saldo, Amortización, Interés, IVA, Sellados).
*/


// OBJETOS CONSTRUCTORES: 

// defino el objeto constructor del usuario
function Usuario (nombre, apellido, mail, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.telefono = telefono;
}

// defino el objeto constructor de los datos de la simulación del usuario

function SimulacionUsuario (cantidadCuotas, interesPrestamo, simulacionTotalPrestamo, cuotaPromedio) {
    this.cantidadCuotas = cantidadCuotas;
    this.interesPrestamo = interesPrestamo;
    this.simulacionTotalPrestamo = simulacionTotalPrestamo;
    this.cuotaPromedio = cuotaPromedio;
}

var nombre = prompt("Ingresá tu nombre");
var apellido = prompt("Ingresá tu apellido");
var mail = prompt("Ingresá tu mail");
var telefono = parseInt(prompt("Ingresá tu telefono"));

var interesPrestamo = interes;
var simulacionTotalPrestamo = totalPrestamo;
var cuotaPromedio = promedioDeCuotas;


// guardo los datos del objeto usuario en una variable
var nuevoUsuario = new Usuario(nombre, apellido, mail, telefono);
console.log(nuevoUsuario)
// console.log(nuevoUsuario.nombre);



// Defino de cantidad de cuotas (entre 3 y 72 cuotas).
var cuotaMin = 3;
var cuotaMax = 72;



// VALIDADORES: 

// función para validar la cantidad de cuotas, solo puede ingresar un número de cuotas entre 3 y 72.
function validarCantidadCuotas() {
    var cuota = parseInt(prompt("Ingresá la cantidad de cuotas que querés (entre " + cuotaMin + " y " + cuotaMax + "): "));
        while (cuota > cuotaMax || cuota < cuotaMin || !cuota) {
            alert("Tú cantidad de cuotas no es válida, ingresá un valore entre " + cuotaMin + " y " + cuotaMax);
            // console.log("Tu cantidad de cuotas no es válida, ingresá un valore entre: " + cuotaMin + " y " + cuotaMax);
            cuota = parseInt(prompt("Ingresá la cantidad de cuotas que querés (entre " + cuotaMin + " y " + cuotaMax + "): "));  
        }
   return cuota;
}
// me guardo en una variable la cantidad de cuotas ingresadas y lo veo en consola
var cantidadCuotas = validarCantidadCuotas();
// console.log("La cantidad de cuotas solicitadas es: " + cantidadCuotas);


// función para validar el monto, que sea positivo y que sean números.
function validarMonto() {
    var montoACalcular = parseInt(prompt("Ingresá el monto que quieras solicitar de prestamo"));
        while (montoACalcular < 0 || !montoACalcular) {
            alert("Ingresá un monto válido");
            // console.log(("Ingresá un monto válido");
            montoACalcular = parseInt(prompt("Ingresá el monto que quieras solicitar de prestamo"));
        }
   return montoACalcular;
}
// me guardo en una variable el monto ingresado y lo veo en consola
var montoACalcular = validarMonto();
// console.log("El monto solicitados es: $" + montoACalcular);





// CALCULO DE CUOTA: 

var totalPrestamo;
var interes = [1.2, 1.3, 1.5, 1.7, 2.1, 2.3, 2.5];
// calculo la cantidad de interés según el monto y la cantidad de cuotas
function calcularPrestamo(cuotas, monto) {

    if (cuotas>=3 && cuotas<=6) {
        interes = interes[0]
        totalPrestamo = monto * interes;
    }
    else if (cuotas>=7 && cuotas<=9) {
        interes = interes[1]
        totalPrestamo = monto * interes;
    }
    else if (cuotas>=7 && cuotas<=9) {
        interes = interes[2]
        totalPrestamo = monto * interes;
    }
    else if (cuotas>=10 && cuotas<=12) {
        interes = interes[3]
        totalPrestamo = monto * interes;
    }
    else if (cuotas>=13 && cuotas<=24) {
        interes = interes[4]
        totalPrestamo = monto * interes;
    }
    else if (cuotas>=25 && cuotas<=36) {
        interes = interes[5]
        totalPrestamo = monto * interes;
    }
    else if (cuotas>=37 && cuotas<=72) {
        interes = interes[6]
        totalPrestamo = monto * interes;
    }
    else {
        console.log("Hay un error en el cálculo de tu cuota");
    }

    return totalPrestamo; 

    /*
    // hice una versión en Switch por si tengo valores definidos "3", "6", "9", etc. me quedaría resolver una opción de "otra cantidad de cuotas"

    switch (cuotas) {
        case 3:
            interes = interes[0]
            break;
        case 6:
            interes = interes[1]
            break;
        case 9:
            interes = interes[2]
            break;
        case 12:
           interes = interes[3]
            break;
        case 24:
           interes = interes[4]
            break;
        case 36:
           interes = interes[5]
            break;
        case 72:
           interes = interes[6]
            break;
        default:
            return "Cantidad de cuotas no válida";
    }
    return monto * interes;

    */

}
calcularPrestamo(cantidadCuotas, montoACalcular);

// Variable para sacar el promedio de cada cuota.
var promedioDeCuotas = totalPrestamo / cantidadCuotas;


// Hago un console.log para corroborar que me devuelve bien los datos.
console.log(`
Prestamos solicitado por: ${nuevoUsuario.nombre} ${nuevoUsuario.apellido}.
Cantidad de cuotas: ${cantidadCuotas}.
Interés: ${interes}%.
Total del prestamo: $${totalPrestamo}.
Cuota promedio: $${promedioDeCuotas}
`);


// me guardo todos los datos de la simulación del usuario en una variable
var nuevaSimulacionUsuario = new SimulacionUsuario (cantidadCuotas, interes, totalPrestamo, promedioDeCuotas);
console.log(nuevaSimulacionUsuario);


// PARA GUARDAR EN SESSION STORAGE

// lo paso a Json así lo puedo grabar como un string
var simulacionJSON = JSON.stringify(nuevaSimulacionUsuario);
// console.log(simulacionJSON);

// lo guardo en el sessionStorage
sessionStorage.setItem("Simulacion de: " + nombre, simulacionJSON);