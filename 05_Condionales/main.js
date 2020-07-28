// alert('Hola Mundo')

// ---------------> Condicionales <------------

// if (condicion) {
//     pasos a seguir si la condicion es verdadera
// } else {
//     pasos a seguir si la condicion es falsa
// }

// ------> Operadores Relacionales
// menor que : <
// mayor que : >
// menor igual : <=
// mayor igual : >=
//----------------
// comparar:  == -> Por buenas practicas ni lo usen :)
// comparar identicamente : ===
// diferente de : !==


var num = 'Hola'

if(num === 10){
    console.log('Es verdadero')
}else{
    // console.log('Es falso')
}


// -------------------------- Challenge --------------------
// password: perritoSalchicha123

// Le van a preguntar al usuaria si contraseña.
// Si es correcta, en la consola dira: 'Bienvenido'.
// Si es incorrecta, en la consola dira : 'Intentalo de nuevo'.

// var pregunta = prompt('Ingresa tu contraseña')

// var password = 'perritoSalchicha123'

// if(pregunta === password) {
//     console.log('Bienvenido')
// }else {
//     console.log('Intentalo de nuevo')
// }

// ------------------ 2 Challenge --------

// Le van a preguntar al usuario que les de un numero.
// Van a decir si este numero es par o es impar.
// modulo -> % <-


// var ask_numer = Number(prompt('Dime cualquier numero'))

// if(ask_numer % 2 === 0 ){
//     console.log(ask_numer + ' es par')
// }else if (ask_numer % 2 === 1){
//     console.log(ask_numer + ' es impar')
// }else{
//     console.error('Datos incorrectos')
// }

// --------- Operadores Logicos


// -> No se puede conducir  eres menor de 15 y mayor 81
// -> 16 y 17 puedes sacar el persimoso 
// -> 18 - 70 puedes conducir

// var edad = Number(prompt('Ingresa tu edad'))

// if(edad >= 18 && edad <= 80 ){
//     console.log('Puedes conducir')
// }else if (edad === 16 || edad === 17 ){
//     console.log('Puedes sacar el permiso para cunducir')
// }else if (edad <= 15 || edad >= 81  ){
//     console.log('No puedes conducir')
// }else{
//     console.error('Datos incorrectos')
// }

// --------- Challege Piedra Papel o Tijera --------

// Van a hacer el juego de piedra pepel o tijera
// 2 jugadores --> en la consola mostrar que jugador gano

var p1 = prompt('Que eliges? Piedra,Papel o Tijera').toLowerCase()
var p2 = prompt('Que eliges? Piedra,Papel o Tijera').toLowerCase()

// console.log(p1)
// console.log(p2)

// toUpperCase() -> todo el texto lo pasa a mayusculas
// toLoweCase() -> todo el texto lo pasa a misnusculas

if(p1 === p2){
    console.log('Empate')
}else if (p1 === 'papel' && p2 === 'piedra' || p1 === 'piedra' && p2 === 'tiejra' || p1 === 'tijera' && p2 === 'papel' ){
    console.log('Gane jugador 1')
} else if (p2 === 'papel' && p1 === 'piedra' || p2 === 'piedra' && p1 === 'tijera' || p2 === 'tijera' && p1 === 'papel') {
    console.log('Gana jugador 2')
} else {
    console.error('Datos incorrectos')
}