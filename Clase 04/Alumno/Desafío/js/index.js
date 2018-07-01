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

function searchStudent (nameOrLastName, students) {
  index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      student.firstName === nameOrLastName ||
      student.lastName === nameOrLastName
    ) {
      index = i
      break
    }
  }
  return index
}

var searchedStudent = prompt('ingrese un nombre')

// var index = searchStudent(searchedStudent, studentsList)
var searchedStudent = searchStudent(searchedStudent, studentsList)

if (index !== -1) {
  console.log('Se encontró el estudiante en la posición ' + searchedStudent)
} else {
  console.log('No encontró el estudiante')
}
