let titutlo = document.getElementById('titulo')
let subtitulo = document.getElementById('subtitulo')
let btn = document.getElementById('btn')

const cambio = () => {

    titutlo.innerHTML = 'Soy el titulo cambiado desde js 👹'
    subtitulo.innerHTML = 'Soy el subtitilo midificado desde js ⛓'
}

btn.addEventListener('click', cambio)