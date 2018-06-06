// var daysOfTheWeek = prompt(
//   'Ingresá un día de la semana',
//   'Lunes, Martes, Miércoles, Jueves, Viernes, Sábado o Domingo'
// )

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  dia = daysOfTheWeek[i]

  switch (dia) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log(dia + ' es un día de semana')
      break
    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      console.log(dia + ' es día de fin de semana')
      break
    default:
      console.log(dia + ' es un resultado incorrecto')
      break
  }
}
