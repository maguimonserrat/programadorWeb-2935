var newStudents = []
var student

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

function Student (firstName, lastName, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.email = email

  this.getDni = function () {
    return dni
  }
  this.getFullName = function () {
    return firstName + lastName
  }
}

for (var i = 0; i < students.length; i++) {
  student = students[i]

  newStudent = new Student(student.firstName, student.lastName, student.email)
  newStudents.push(newStudent)
}

console.log(newStudents)
//console.log(student)
//console.log(student.lastName)
//console.log(student.firstName)

// if student.lastName === undefined , no mostrar newStudents - no se como hacer esa parte :)
