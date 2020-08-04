// alert("Funciona!");

// for( variable; condicion; avance ){

//      código a ejecutar

// }

// 1.- Crear variable
// 2.- Agregar condición
// 3.- Definir el avance

// for(var i = 0; i < 10 ; i = i + 1){

//     console.log(i)

// }

// RESTO DEL CODIGO

// i = 0 + 1  true 

// i = 1 + 1 true

// i = 2 + 1 true

// .
// .
// .

// i = 9 + 1 true

// i = 10 

// for(var i = 0; i <= 100; i = i + 5) {
//     console.log(i)
// }


// for(var i = 0; i<= 300; i += 3){ 
//     console.log(i)
// }

// Sintáxis más común
// for(var i = 0; i <= 3; i++){ 
//     console.log(i)
// }


//Challenge
// empezar en 10 terminar en -250 avanzar de uno en uno
// empezar en -50 y llegar a 500 de 5 en 5 
// empezar en 1000 y llegar a 2000 de 10 en 10

var alumnos = ["Osvaldo", "Ricardo", "Juan", "Mauricio", "Diego", "Roberto", "Karla", "Araceli"];

// console.log(alumnos.length)

alumnos.push("Gerardo");
alumnos.push("Brisa");

// uso más común
for(var i = 0; i < alumnos.length; i++){
    // console.log( i + " " +alumnos[i] )
}

// paradigmas
// orientado a objetos
// orientado a funciones

//---------------------------------> Repaso <----------------------------
// inicio       limite  secuencia
for(var i = 0; i <= 100; i++){
    // console.log(i)
}

//-------> Challenge Final <-------
// 1 -> 100
// Si el numero es divisible entre 3 -> Fizz 
// Si el numero es divisible entre 5 -> Buzz
// Si el numero es divisible entre 3 y 5 -> FizzBuzz

//---- 👍 -----
// 0
// 1
// 2
// 3 Fizz
// 4 
// 5 Buzz
// ...
// 15 Fizbuzz

//----- 🚫 -----
// 15 fizz
// 15 buzz
// 15 fizzbuzz

for(var x = 1; x <= 100; x++ ){
    if(x % 3 === 0 && x % 5 === 0){
        console.log(x + ' : fizzbuzz')
    }else if(x % 5 === 0 ){
        console.log(x + ' : buzz')
    }else if(x % 3 === 0){
        console.log(x + ' : fizz')
    }else{
        console.log(x)
    }   
}