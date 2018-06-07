var operacion = prompt('Ingresá una operación', 'sum, res, div o mul')

var primerNumero = prompt('Ingresá el primer número')
var parsedPrimerNumero = parseFloat(primerNumero, 10)

var segundoNumero = prompt('Ingresá el segundo número')
var parsedSegundoNumero = parseFloat(segundoNumero, 10)

var resultado

if ('sum' === operacion) {
  console.log((resultado = parsedPrimerNumero + parsedSegundoNumero))
} else {
  if ('res' === operacion) {
    console.log((resultado = parsedPrimerNumero - parsedSegundoNumero))
  } else {
    if ('mul' === operacion) {
      console.log((resultado = parsedPrimerNumero * parsedSegundoNumero))
    } else {
      while (parsedSegundoNumero === 0) {
        var segundoNumero = prompt('Ingerese el segundo número')
        var parsedSegundoNumero = parseFloat(segundoNumero, 10)
      }
      console.log((resultado = parsedSegundoNumero / parsedSegundoNumero))
    }
  }
}
