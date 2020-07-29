// -------------> Arreglo o Array <------------

// Pocisiones:   0        1        2       3
var colores = ['Negro', 'Rojo', 'Azul', 'Verde']

console.log(colores)
// -> Acceder a a un valor  
console.log(colores[2])


// colores[0] = 'Blanco'
// console.log(colores)

// ------- .push()
// Agrega un elemento en la ultima posicon

colores.push('Blanco') // -> 4
colores.push('Naranja') // -> 5

console.log(colores)

// ---------- .pop()
// Elimina el ultimo valor del arreglo

colores.pop()
console.log(colores)


//---------- .splice()
// Eliminar valores espesificos o sustituirlos
// -> Primer valor: en que posicion queiren empezar
// -> Segundo valor: cuantos valores quieres eliminar
// -> Tercer valor: Elemento que quieres agregar
colores.splice(1, 1, 'Prueba')
console.log(colores)

//--------> Challenge <-------
// Hacer un arreglo de musica vacio, agregar 5 generos con el metodo push,
// remplazar la posicion numero 3 con "PerritoSalchicha" y por ultimo borrar el ultimo elemento con el metodo pop. 

var musica = []

musica.push('Reggeton', 'Trap', 'Clasica', 'Salsa', 'Cumbia')
musica.splice(3, 1 , 'PerritoSalchicha')
musica.pop()
console.log(musica)