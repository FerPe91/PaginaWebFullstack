//-----------------------------------    Funciones    -------------------------------------------------//

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function validarCaptcha(predeterminado:number, usuario:number){
  if(predeterminado===usuario){
    return true
  }else{
    return false
  }

}

function validarDato(elemento:string, tamañoMin:number,elemento2:HTMLParagraphElement){ 
  if (elemento.length>=tamañoMin){
    elemento2.innerHTML=`​✔️`
    return true
  }else{
    elemento2.innerHTML=`**Your message has to contain at least ${tamañoMin} characters`
    return false
  }
}

//-----------------------------------    Variables    -------------------------------------------------//

let codigo = <HTMLParagraphElement>document.getElementById("codigo");
let codigoUsuario = <HTMLInputElement>document.getElementById("codigoUsuario");
let comentarios = <HTMLInputElement>document.getElementById("comentarios");
let btnVerificar = <HTMLButtonElement>document.getElementById("btnVerificar");
let msjVerif = <HTMLParagraphElement>document.getElementById("msjVerif");
let mail =<HTMLInputElement>document.getElementById("mail");
let estadoMail = <HTMLParagraphElement>document.getElementById("estadoMail");
let estadoComentarios = <HTMLParagraphElement>document.getElementById("estadoComentarios");
let estadoCaptcha = <HTMLParagraphElement>document.getElementById("estadoCaptcha");

let inputMail:string="";
let comentarioUsuario:string="";
let min: number = 0;
let max: number = 99999;
let valorUsuario: number = 0;
let captcha: number = getRandomInt(min, max);
let estado:string=""

//-----------------------------------    Main    -------------------------------------------------//


codigo.innerHTML = `${captcha}`;

btnVerificar.addEventListener("click", () => {
  inputMail= String(mail.value)
  comentarioUsuario=String(comentarios.value)
  valorUsuario = Number(codigoUsuario.value);

  let valorCaptcha:boolean=validarCaptcha(captcha,valorUsuario)

  validarDato(inputMail, 8, estadoMail)
  validarDato(comentarioUsuario, 20, estadoComentarios)

  if(valorCaptcha){ //verificacion del codigo
    estadoCaptcha.innerHTML=`✔️​`
  }else{
    estadoCaptcha.innerHTML="**Invalid Captcha"
  }

  if(  validarDato(inputMail, 8, estadoMail) &&  validarDato(comentarioUsuario, 20, estadoComentarios) && valorCaptcha){ //estado final el formulario
    msjVerif.innerHTML=`Submited! ​✔️​`
  }else{
    msjVerif.innerHTML=`Cannot Send`
  }
  
});

