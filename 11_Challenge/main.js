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
 
    let pizzaValue = preguntaPizza.value.toLowerCase()
    console.log(pizzaValue)
    if(pizzaValue === 'no'){
        respuestaPizza.innerHTML = '🥰 Sin piña 🥰'
    }else if(pizzaValue === 'si'){
        respuestaPizza.innerHTML = '🤬 Con piña 🤬'
    }else{
        respuestaPizza.innerHTML = '🚫 Datos incorrectos 🚫'
    }

}

btn.addEventListener('click', ordenar)

// Si el usuario dice que "SI" -> :(
// Si el usuario dice que "NO" -> :)    
// Maquetar el formulario para que parecezca de una pagina real 