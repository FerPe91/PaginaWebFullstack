//-----------------------------------    Funciones    -------------------------------------------------//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function validarCaptcha(predeterminado, usuario) {
    if (predeterminado === usuario) {
        return true;
    }
    else {
        return false;
    }
}
function validarDato(elemento, tamañoMin, elemento2) {
    if (elemento.length >= tamañoMin) {
        elemento2.innerHTML = "\u200B\u2714\uFE0F";
        return true;
    }
    else {
        elemento2.innerHTML = "**Your message has to contain at least ".concat(tamañoMin, " characters");
        return false;
    }
}
//-----------------------------------    Variables    -------------------------------------------------//
var codigo = document.getElementById("codigo");
var codigoUsuario = document.getElementById("codigoUsuario");
var comentarios = document.getElementById("comentarios");
var btnVerificar = document.getElementById("btnVerificar");
var msjVerif = document.getElementById("msjVerif");
var mail = document.getElementById("mail");
var estadoMail = document.getElementById("estadoMail");
var estadoComentarios = document.getElementById("estadoComentarios");
var estadoCaptcha = document.getElementById("estadoCaptcha");
var inputMail = "";
var comentarioUsuario = "";
var min = 0;
var max = 99999;
var valorUsuario = 0;
var captcha = getRandomInt(min, max);
var estado = "";
//-----------------------------------    Main    -------------------------------------------------//
codigo.innerHTML = "".concat(captcha);
btnVerificar.addEventListener("click", function () {
    inputMail = String(mail.value);
    comentarioUsuario = String(comentarios.value);
    valorUsuario = Number(codigoUsuario.value);
    var valorCaptcha = validarCaptcha(captcha, valorUsuario);
    validarDato(inputMail, 8, estadoMail);
    validarDato(comentarioUsuario, 20, estadoComentarios);
    if (valorCaptcha) { //verificacion del codigo
        estadoCaptcha.innerHTML = "\u2714\uFE0F\u200B";
    }
    else {
        estadoCaptcha.innerHTML = "**Invalid Captcha";
    }
    if (validarDato(inputMail, 8, estadoMail) && validarDato(comentarioUsuario, 20, estadoComentarios) && valorCaptcha) { //estado final el formulario
        msjVerif.innerHTML = "Submited! \u200B\u2714\uFE0F\u200B";
    }
    else {
        msjVerif.innerHTML = "Cannot Send";
    }
});
