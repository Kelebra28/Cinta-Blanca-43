// document.getElementById -> busca en todo el documento HTML un ID
let titutlo = document.getElementById('titulo') // -> h1
let subtitulo = document.getElementById('subtitulo') // -> h2
let input = document.getElementById('pregunta') // -> input
let texto = document.getElementById('respuesta') // -> p
let btn = document.getElementById('btn') // -> button

const cambio = () => {
    
    //innterHTML -> Mostar o pintar en la etiqueta un valor
    titutlo.innerHTML = 'Soy el titulo cambiado desde js 👹'
    subtitulo.innerHTML = 'Soy el subtitilo midificado desde js ⛓'
    // -> .value: es el texto que ingreso en el input        
    texto.innerHTML = input.value
    // console.log(input) // -> Etiqueta HTML 
    // console.log(input.value) // -> El texto que el usuario ingresa

}

btn.addEventListener('click', cambio)


//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Direccion
// Preguntar Telefono
// Preguntar si quiren pizza con piña o  sin
// respuestas : si o no
// -> mostrar las respuestas en una card