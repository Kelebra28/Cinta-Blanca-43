// alert('Descarga!!!!!!!!!!!!!!!!')



//------------------------------------Vanilla JS------------------------------


// var nombre = valor

//------ varlor numerico
var numero = 50
// ----- valor texto o string
var nombre = 'Ricardo'
// ------- valor booeleano o boolean
var verdadero = true // -> false

// ------- variables especiales-----

// --array o arreglo
var arreglo = [] //---> corchetes
//--- objeto o object
var objeto = {} // ---> llaves


////-------------------------------------

var num1 = 100
var num2 = 500
//--------- salidas o outputs -----------

console.log(num1 + num2)

var resultado = num1 + num2
// console.log(resultado)
// console.log(nombre)


var saludo = 'Hola'
var sensei = 'kelebra'

// console.log(saludo + ' ' + sensei)


// --------------------- entradas o inputs--------
//             prompt me permite  que el usuario ingrese datos                    
// var pregunta = prompt('Ingresa tu nombre')

// console.log(pregunta)


// --------------------------Challenge--------------------------

// -> Preguntar al usuario su nombre direccion y telefono
//    mostrar cada resultado en la consola
// -> Pregutar al usuario su edad cumplira este año y mostrar en la consola:
//    que año nacio


//-------Paso 1-----------
// var preguntaNombre = prompt('Ingresa tu nombre')
// var preguntaTelefono = prompt('Ingresa tu telefono')
// var preguntaDireccion = prompt('Ingresa tu direccion')
var preguntaEdad = prompt('Ingresa tu edad')

// console.log(preguntaNombre)
// console.log(preguntaTelefono)
// console.log(preguntaDireccion)
console.log(preguntaEdad) // --> '22'

// ---------- Paso 2---------

var anio = 2020

// typeof() -> me indica que tipo de valor es 
console.log(typeof(preguntaEdad)) // ---> mostar que tipo de valor es preguntaEdad

// Number()  ----> Pasa el tipo de valor a numerico

var edadReal = Number(preguntaEdad) // '22' -> 22

console.log(edadReal)
console.log(typeof(edadReal))

var nacimiento = anio - edadReal

console.log(nacimiento)