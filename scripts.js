const form = document.querySelector(".formulario-login")
const mascara = document.querySelector(".mascara-formulario")
const form2 = document.querySelector(".formulario-cadastro")

function login(){
    form.style.visibility = "visible"
}

function fecharformulario(){
    mascara.style.visibility = "hidden"
    form.style.visibility = "hidden"
}

function cadastro(){
    form.style.visibility = "hidden"
    form2.style.visibility = "visible"
}

function voltarParaLogin(){
    form2.style.visibility = "hidden"
    form.style.visibility = "visible"
}

function fecharform2(){
    form2.style.visibility = "hidden"
}
