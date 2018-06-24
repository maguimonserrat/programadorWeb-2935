var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

// Función constructora
function Student (firstName, lastName, dni, email) {
  // Propiedades privadas
  var id = dni

  // Propiedades públicas
  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  // Métodos públicos
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
  }
}

var oldStudent

var newStudent
var newStudents = []

// Lleno un nuevo Array con los objetos creados con la función Car
for (var i = 0; i < student.length; i++) {
  oldStudent = student[i]
  newStudent = new Student(
    oldStudent.firstName,
    oldStudent.lastName,
    oldStudent.dni,
    oldStudent.email
  )
  newStudents.push(newStudent)
}

console.log(student) //esto me da el objeto del ppio
console.log(newStudents) //esto me esta dando un array vacío

for (var i = 0; i < newStudents.length; i++) {
  console.log(newStudents[i].getFullName())
}

//armo la lista y meto las cosas adentro
var mainListNode = document.getElementById('main-list')

//vacio todo lo q esté con la clase mail-list en el html
mainListNode.innerHTML = ''

var student
var studentNode

for (var i = 0; i < student.length; i++) {
  studentNode = document.createElement('li')
  studentNode.innerHTML = student[i]
  studentNode.className = 'list-group-item'
  mainListNode.appendChild(studentNode)
}

//ya se que no se hace así pero no se como hacerlo.
mainListNode.innerHTML =
  '<h1>' +
  student.firstName +
  ' ' +
  student.lastName +
  '</h1>' +
  '<h3> DNI: ' +
  student.dni +
  '</h3>' +
  '<p>E-mail: ' +
  student.email +
  '</p>'

//var studentNode = createStudentNode(newStudent)
//student node (que es un li?) le hago un create element con un h1, otro con un h3 y otro con un p
//innerhtml =
