// Pedir nombre mediante `prompt` y mostrarlo en consola junto con algún texto de saludo. Ej: `Hola Juan!`

var fullName = prompt('Escribí tu nombre')

console.log('Hola ' + fullName)

// Pedir un numero mediante `prompt`, parsearlo, sumarlo a otro que este en una variable y luego mostrar el resultado en consola.

var Number2 = 5

var Number1 = prompt('Escribí un número')

Number1 = parseFloat(Number1, 10)

var resultSum = Number1 + Number2

console.log(resultSum)

// Pedir un numero mediante `prompt`, parsearlo, restarlo a otro que este en una variable y luego mostrar el resultado en consola.

var Number3 = prompt('Escribí otro número')

Number3 = parseFloat(Number3, 10)

Number4 = 73

var resultRes = Number3 - Number4

console.log(resultRes)

// Pedir un numero mediante `prompt`, luego otro, parsearlos y sumarlos, luego mostrar el resultado en consola.

var Number5 = prompt('Escribí ooootro número')
var Number6 = prompt('Escribí ooootro número mas')

Number5 = parseFloat(Number5, 10)
Number6 = parseFloat(Number6, 10)

var resultSum2 = Number5 + Number6

console.log(resultSum2)