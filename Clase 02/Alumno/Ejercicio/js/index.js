
var dia = prompt('Ingresá un día de la semana', 'Lunes, Martes, Miércoles, Jueves, Viernes, Sábado o Domingo')

switch (dia) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un día de semana')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('Es fin de semana')
    break
  default:
    console.log('Resultado incorrecto')
    break
}