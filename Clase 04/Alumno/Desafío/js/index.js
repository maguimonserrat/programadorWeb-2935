//var searchedStudent = prompt('ingrese un nombre')

var firstName
var lastName
var dni

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

console.log(studentsList.length)

function searchStudent (studentsList) {
  index = -1
  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
  }
  if ((i = student)) {
    console.log('Se encontró al estudiante en la posición ' + i)
  } else {
    console.log('No se encuentra al estudiante')
  }
}

/* que reciba el propmt de student.firstName y student.lastName y me de el i */

//'se encontró el estudiante en la posición ' studentsList[i]
// No se pudo encontrar el alumno
