var genero = prompt('Ingrese su género', 'Femenino o Masculino')

var edad = prompt('Ingrese su edad')

switch (genero) {
  case 'Femenino':
  case 'femenino':
  case 'fem':
  case 'mujer':
  case 'female':
    console.log('Sra.')
    break
  case 'Masculino':
  case 'masculino':
  case 'male':
  case 'hombre':
    console.log('Sr.')
    break
  default:
    console.log('Sx.')
    break
}

if (edad >= 18) {
  console.log('Es mayor de edad puede ingresar')
} else {
  console.log('Es menor de edad, no puede ingresar')
}
