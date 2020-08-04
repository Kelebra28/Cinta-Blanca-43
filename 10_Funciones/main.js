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
saludoNombre('Ricardo')
saludoNombre('Juan')
saludoNombre('Maura')
saludoNombre('Hector')
saludoNombre()

const suma = (num1, num2) => {
    console.log(num1 + num2)
}

suma(10, 50)
suma(100054505945, .56985165)