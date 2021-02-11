document.getElementById('enviar').addEventListener('click', validarFormulario, false);
document.getElementById('button').addEventListener('click', borrar, false);

//cookie para guardar los intentos
var x = document.cookie = 0;
document.getElementById('intentos').innerHTML = "Intentos: " + x;

//RESETEAR TODOS LOS CAMPOS
function borrar() {
    var elementos = document.getElementsByTagName('input');
    elementos.forEach(element => {
        element.value = "";
    });
}

//COMPRUEBA SI LA LETRA DEL DNI CORRESPONDE CON DICHO NUMERO
function comprobarLetraDNI(num, letra) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    num = num % 23;
    if (letra == letras[num]) {
        return true;
    } else {
        return false;
    }
}

//VALIDA EL FORMULARIO
function validarFormulario(evento) {
    x++;
    document.getElementById('intentos').innerHTML = "Intentos: " + x;

    if (validarNombre() && validarApellidos() && validarEdad() && validarDNI() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora()) {
        alert('formulario enviado');
    } else {
        evento.preventDefault();
    }
}

//SI EL NOMBRE ES CORRECTO O NO 
function validarNombre() {
    var result = true;
    var nombre = document.getElementById('nombre');

    if (nombre.value == '') {
        result = false;
        nombre.className = 'error';
        nombre.focus();
        document.getElementById('errores').innerHTML = 'El nombre no puede estar en blanco';
    } else {
        if (nombre.value.length < 3) {
            result = false;
            nombre.className = 'error';
            nombre.focus();
            document.getElementById('errores').innerHTML = 'El nombre es demasiado corto';
        } else {
            nombre.className = '';
            document.getElementById('errores').innerHTML = '';
        }
    }
    return result;
}

//SI LOS APELLIDOS SON CORRECTOS O NO
function validarApellidos() {
    var result = true;
    var nombre = document.getElementById('apellidos');

    if (apellidos.value == '') {
        result = false;
        apellidos.className = 'error';
        apellidos.focus();
        document.getElementById('errores').innerHTML = 'Los apellidos no puede estar en blanco';
    } else {
        if (apellidos.value.length < 3) {
            result = false;
            apellidos.className = 'error';
            apellidos.focus();
            document.getElementById('errores').innerHTML = 'Los apellidos son demasiado cortos';
        } else {
            apellidos.className = '';
            document.getElementById('errores').innerHTML = '';
        }
    }
    return result;
}

//QUE LA EDAD SEA CORRECTA(un numero entre 0 y 105)
function validarEdad() {
    var result = true;
    var edad = document.getElementById('edad');

    if (edad.value == '') {
        result = false;
        edad.className = 'error';
        edad.focus();
        document.getElementById('errores').innerHTML = 'La edad no puede estar en blanco';
    } else if (isNaN(edad.value)) {
        result = false;
        edad.className = 'error';
        edad.focus();
        document.getElementById('errores').innerHTML = 'La edad tiene que ser un número';
    } else {
        if (parseInt(edad.value) < 0 || parseInt(edad.value) > 105) {
            result = false;
            edad.className = 'error';
            edad.focus();
            document.getElementById('errores').innerHTML = 'La edad debe estar entre 0 y 105';
        } else {
            edad.className = '';
            document.getElementById('errores').innerHTML = '';
        }
    }
    return result;
}

//COMPRUEBA SI EL DNI ES CORRECTO
function validarDNI() {
    var result = true;
    var dni = document.getElementById('nif');

    if (dni.value == '') {
        result = false;
        dni.className = 'error';
        dni.focus();
        document.getElementById('errores').innerHTML = 'el DNI no puede estar en blanco';
    } else {
        var condicion = /\d{8}-[A-Z]/;

        if (!condicion.test(dni.value)) {
            result = false;
            dni.className = 'error';
            dni.focus();
            document.getElementById('errores').innerHTML = 'el DNI indicado tiene una estructura incorrecta';
        } else {
            var numeros = dni.value.substring(0, 8);
            var letra = dni.value.substring(9, 10)

            if (!comprobarLetraDNI(parseInt(numeros), letra)) {
                result = false;
                dni.className = 'error';
                dni.focus();
                document.getElementById('errores').innerHTML = 'la letra del DNI no corresponde con ese numero';
            } else {
                dni.className = '';
                document.getElementById('errores').innerHTML = '';
            }
        }
    }
    return result;
}

//COMPRUEBA EL EMAIL
function validarEmail() {
    var result = true;
    var email = document.getElementById('email');

    if (email.value == '') {
        result = false;
        email.className = 'error';
        email.focus();
        document.getElementById('errores').innerHTML = 'el email no puede estar en blanco';
    } else {
        var condicion = /\S*@\S*\.\S*/;
        if (!condicion.test(email.value)) {
            result = false;
            email.className = 'error';
            email.focus();
            document.getElementById('errores').innerHTML = 'el email no es válido';
        } else {
            email.className = '';
            document.getElementById('errores').innerHTML = '';
        }
    }
    return result;
}

//COMPRUEBA QUE SE HAYA INDICADO UNA PROVINCIA
function validarProvincia() {
    var result = true;
    var provincia = document.getElementById('provincia');

    if (provincia.value == '0') {
        result = false;
        provincia.className = 'error';
        provincia.focus();
        document.getElementById('errores').innerHTML = 'debes seleccionar una provincia';
    } else {
        provincia.className = '';
        document.getElementById('errores').innerHTML = '';
    }
    return result;
}
 
//COMPRUEBA LA FECHA
function validarFecha() {
    var result = true;
    var fecha = document.getElementById('fecha');

    if (fecha.value == '') {
        result = false;
        fecha.className = 'error';
        fecha.focus();
        document.getElementById('errores').innerHTML = 'la fecha no puede estar en blanco';
    } else {
        //DD-MM-YYYY o DD/MM/YYYY
        var condicion = /^\d{2}[/-]\d{2}[/-]\d{4}$/;
        if (!condicion.test(fecha.value)) {
            result = false;
            fecha.className = 'error';
            fecha.focus();
            document.getElementById('errores').innerHTML = 'la fecha no es válida';
        } else {
            fecha.className = '';
            document.getElementById('errores').innerHTML = '';
        }
    }
    return result;
}

//comprueba el teléfono
function validarTelefono() {
    var result = true;
    var telefono = document.getElementById('telefono');

    if (telefono.value == '') {
        result = false;
        telefono.className = 'error';
        telefono.focus();
        document.getElementById('errores').innerHTML = 'el telefono no puede estar en blanco';
    } else { 
        //nueve dígitos
        var condicion = /^\d{9}$/;
        if (!condicion.test(telefono.value)) {
            result = false;
            telefono.className = 'error';
            telefono.focus();
            document.getElementById('errores').innerHTML = 'el telefono no es válido';
        } else {
            telefono.className = '';
            document.getElementById('errores').innerHTML = '';
        }
    }
    return result;
}

//comprueba la hora
function validarHora() {
    var result = true;
    var hora = document.getElementById('hora');

    if (hora.value == '') {
        result = false;
        hora.className = 'error';
        hora.focus();
        document.getElementById('errores').innerHTML = 'La hora no puede estar en blanco';
    } else { 
        // hora entre 0 y 23 ,  minutos entre 0 y 59  
        var condicion = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!condicion.test(hora.value)) {
            result = false;
            hora.className = 'error';
            hora.focus();
            document.getElementById('errores').innerHTML = 'la hora no es válida';
        } else {
            hora.className = '';
            document.getElementById('errores').innerHTML = '';
        }
    }
    return result;
}