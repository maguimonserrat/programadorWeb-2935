var newStudents = []
var student
var randomNumber = Math.random()

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

function Student (firstName, lastName, dni, email) {
  var id = Math.random()

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function () {
    return id
  }
  this.getStudentName = function () {
    return firstName + lastName + dni + email
  }
}

for (var i = 0; i < students.length; i++) {
  student = students[i]

  newStudent = new Student(
    student.firstName,
    student.lastName,
    student.dni,
    student.email
  )
  newStudents.push(newStudent)
}

console.log(student)
console.log(newStudent)
