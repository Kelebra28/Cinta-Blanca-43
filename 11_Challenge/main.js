//Inputs
let preguntaNombre = document.getElementById('preguntaNombre')
let preguntaDireccion = document.getElementById('preguntaDireccion')
let preguntaTelefono = document.getElementById('preguntaTelefono')
let preguntaPizza = document.getElementById('preguntaPizza')
// boton 
let btn = document.getElementById('btn')
// respuestas
let respuestaNombre = document.getElementById('respuestaNombre')
let respuestaDireccion = document.getElementById('respuestaDireccion')
let respuestaTelefono = document.getElementById('respuestaTelefono')
let respuestaPizza = document.getElementById('respuestaPizza')


const ordenar = () => {


    respuestaNombre.innerHTML = 'Nombre: ' + preguntaNombre.value
    respuestaDireccion.innerHTML = 'Direccion: ' +preguntaDireccion.value
    respuestaTelefono.innerHTML = 'Telefono: ' + preguntaTelefono.value
    respuestaPizza.innerHTML = 'Piña o sin piña: ' +preguntaPizza.value

}

btn.addEventListener('click', ordenar)