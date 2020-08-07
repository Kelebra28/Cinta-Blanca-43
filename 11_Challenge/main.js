//Inputs
let preguntaNombre = document.getElementById('preguntaNombre')
let preguntaDireccion = document.getElementById('preguntaDireccion')
let preguntaTelefono = document.getElementById('preguntaTelefono')
let preguntaPizza = document.getElementById('preguntaPizza')
// Boton 
let btn = document.getElementById('btn')
// Respuestas
let respuestaNombre = document.getElementById('respuestaNombre')
let respuestaDireccion = document.getElementById('respuestaDireccion')
let respuestaTelefono = document.getElementById('respuestaTelefono')
let respuestaPizza = document.getElementById('respuestaPizza')
// Card
let card = document.getElementById('card')
// Img
let imgPizza = document.getElementById('imgPizza')


const ordenar = () => {

    respuestaNombre.innerHTML = 'Nombre: ' + preguntaNombre.value
    respuestaDireccion.innerHTML = 'Direccion: ' +preguntaDireccion.value
    respuestaTelefono.innerHTML = 'Telefono: ' + preguntaTelefono.value
 
    let pizzaValue = preguntaPizza.value.toLowerCase()
    console.log(pizzaValue)

    if(pizzaValue === 'no'){
        respuestaPizza.innerHTML = '🥰 Sin piña 🥰'
        imgPizza.src = 'https://imagenes.milenio.com/CU287W9FW_sUIP1hV9nKcYoMLd0=/958x596/https://www.milenio.com/uploads/media/2019/06/03/no-hay-quien-se-resista.jpg'

    }else if(pizzaValue === 'si'){
        respuestaPizza.innerHTML = '🤬 Con piña 🤬'
        imgPizza.src = 'https://t1.rg.ltmcdn.com/es/images/0/2/6/img_pizza_hawaiana_de_jamon_y_pina_50620_600.jpg'
    }else{
        respuestaPizza.innerHTML = '🚫 Datos incorrectos 🚫'
        imgPizza.src = 'https://i.pinimg.com/originals/86/f2/34/86f2341d76ba2fbec6fc722c888b66a0.jpg'
    }
    //  console.log(card.classList)
    card.classList.remove('d-none')
    // console.log(card.classList)
}

btn.addEventListener('click', ordenar)

// Si el usuario dice que "SI" -> :(
// Si el usuario dice que "NO" -> :)    
// Maquetar el formulario para que parecezca de una pagina real 

// Si el usuari dice si -> imagen de pizza con piña
// Si el usuario dice no -> imagen de pizza peperono