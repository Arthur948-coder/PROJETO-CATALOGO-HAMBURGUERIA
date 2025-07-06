function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

const form = document.querySelector(".formulario-login")
const mascara = document.querySelector(".mascara-formulario")

function login(){
    form.style.visibility = "visible"
}

function fecharformulario(){
    mascara.style.visibility = "hidden"
    form.style.visibility = "hidden"
}
