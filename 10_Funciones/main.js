// Vanilla JS
function saludo(){
    console.log('Hola')
}
// saludo()

var saludo2 = function () {
    console.log('Hola 2')
}
// saludo2()

//ECMAS 5

//let  -> variable 
//const // variable constante 

// let num1 = 10
// console.log(num1)
// num1 = 'Que onda'
// console.log(num1)

// const num2 = 50
// console.log(num2)
// num2 = 500
// console.log(num2)


//---------------> Arrow Function <--------------

const saludoNombre = (x = 'Anonimo') => {
    console.log(x + ' JS dice hola')
}
//              x
// saludoNombre('Ricardo')
// saludoNombre('Juan')
// saludoNombre('Maura')
// saludoNombre('Hector')
// saludoNombre()

const suma = (num1, num2) => {
    console.log(num1 + num2)
}

// suma(10, 50)
// suma(100054505945, .56985165)

// let pregunta = prompt('Dime tu edad')

//----- Challenge----
// 1
// Funcion que reste
// Multiplique
// 2 -> preguntar al usuario
// el area de un cuadrado 
// el area de un rectangulo
// el area de un triangulo


//--------- Resta
const resta = (x, y) => {
    console.log('La resta es : ' + (x - y))
}
resta(40, 10)

//--------- Multiplicacion
const multi = (x, y) => {
    console.log('La multiplicacion es : ' + (x * y))
}
multi(10, 10)

//--------- Area del cuadrado
let preguntaCuadrado = Number(prompt('Ingresa el cuadrado'))

const areaCuadrado = () => {
    console.log('El area del cuadrado es : ' + (preguntaCuadrado * preguntaCuadrado))
}
areaCuadrado()
//--------- Area del rectangulo
const areaRectangulo = () => {

    let baseR = Number(prompt('Ingresa la base del Rectangulo'))
    let alturaR = Number(prompt('Ingresa la altura del Rectangulo'))

    console.log('El area del rectangulo es : ' + ( baseR * alturaR ))

}
areaRectangulo()

//--------- Area del triangulo

const areaTriangulo = ( b = Number(prompt('Ingresa la base el triangulo')), h = Number(prompt('Ingresa la altura el triangulo')) ) => {
    console.log('El area del triangulo es : ' + ((b*h) / 2))
}

areaTriangulo()