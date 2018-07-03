console.log('Initi app')

var LS_KEY = 'studentsList'

// Carga incial de la appp
var localList = getLocalList(LS_KEY)

var mainListNode = document.getElementById('mainList')

var newStudentsList = []

var localStudent
var newStudent

for (var i = 0; i < localList.length; i++) {
  localStudent = localList[i]
  newStudent = new Student(
    localStudent.firstName,
    localStudent.lastName,
    localStudent.dni,
    localStudent.email
  )
  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)
}

// Levantar nombre y validarlo

var firstNameInputNode = document.getElementById('firstName')

firstNameInputNode.onblur = validateEmptyField

function validateEmptyField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    // Caso incorrecto
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateButton()
}

// Levantar Apellido

var lastNameInputNode = document.getElementById('lastName')

// lastNameInputNode.onblur = validateEmptyField

// function validateEmptyField (event) {
//   var inputNode = event.target

//   if (!inputNode.value) {
//     // Caso incorrecto
//     inputNode.classList.remove('is-valid')
//     inputNode.classList.add('is-invalid')
//   } else {
//     // Caso correcto
//     inputNode.classList.remove('is-invalid')
//     inputNode.classList.add('is-valid')
//   }

//   validateButton()
// }

// Levantar el dni y validarlo

var dniInputNode = document.getElementById('dni')

dniInputNode.onblur = validateDniField

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  if (
    !inputNode.value ||
    isNaN(parsedValue) ||
    parsedValue <= 0 ||
    searchStudentIndexByDni(inputNode.value, newStudentsList) !== -1
  ) {
    // Caso incorrecto
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateButton()
}

// Levantar email y validarlo

var emailInputNode = document.getElementById('email')

emailInputNode.onblur = validateEmailField

function validateEmailField (event) {
  var inputNode = event.target

  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') === -1 ||
    inputNode.value.indexOf('.') === -1
  ) {
    // Caso incorrecto
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateButton()
}

// Función que valida si habilitar o no el botón de agregar

var addStudentButtonNode = document.getElementById('addStudentButton')

function validateButton () {
  var isValidInputNodes = document.getElementsByClassName('is-valid')

  if (isValidInputNodes.length === 3) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

// Función que agrega estudiante

addStudentButtonNode.onclick = addStudent

function addStudent (event) {
  var firstName = firstNameInputNode.value
  var lastName = lastNameInputNode.value
  var dni = dniInputNode.value
  var email = emailInputNode.value

  var newStudent = new Student(firstName, lastName, dni, email)

  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)

  setLocalList(LS_KEY, newStudentsList)

  // Limpieza del formulario
  firstNameInputNode.value = ''
  lastNameInputNode.value = ''
  dniInputNode.value = ''
  emailInputNode.value = ''

  firstNameInputNode.classList.remove('is-valid')
  dniInputNode.classList.remove('is-valid')
  emailInputNode.classList.remove('is-valid')

  addStudentButtonNode.disabled = true
  console.log(newStudentsList)
}

// Función que busqued un dni

function searchStudentIndexByDni (dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}

// Funcion desafío clase 08

/**
 * Función que devuelve nodos li
 * @param { Student } newStudent
 * @returns Node
 */
function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.getId()

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.getFullName() +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

// Función desafío clase 05

// Función constructora

function Student (firstName, lastName, dni, email) {
  // Propiedades privadas
  var id = dni

  // Propiedades públicas
  this.firstName = firstName

  if (lastName) {
    this.lastName = lastName
  }

  this.dni = dni

  if (email) {
    this.email = email
  }

  // Métodos públicos
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
  }
}

// Función desafío clase 07
/**
 * Defino la función getLocalList
 * @param { string } key 
 */
function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

/**
 * Defino la función setLocalList
 * @param { string } key 
 * @param { array } list 
 */
function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

//2. Deberá poder eliminar un alumno ingresando el número de DNI, en caso de que no exista no borra nada.

// Función que busca un dni (la volvi a copiar hace falta?)

function searchStudentIndexByDni (dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}

// Levantar el dni y validarlo(funciona)

var deleteDniInputNode = document.getElementById('deleteDni')

deleteDniInputNode.onblur = deleteDniField

function deleteDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  if (
    // tengo q poner bien estas condiciones
    !inputNode.value ||
    searchStudentIndexByDni(inputNode.value, newStudentsList) === -1
  ) {
    // si no lo encuentra
    // inputNode.classList.remove('is-valid') // lo comento para q no se ponga verde
    inputNode.classList.add('is-invalid') // Rojo
  } else {
    // si lo encuentra
    inputNode.classList.remove('is-invalid')
    // inputNode.classList.add('is-valid') // Verde // lo comento para q no se ponga verde
  }
  validateButtonRemove()
}

// Función que valida si habilitar o no el botón de eliminar (puse que no se ponga verde para q no se pise con lo del mail)

var deleteStudentButtonNode = document.getElementById('deleteStudentButton')

function validateButtonRemove () {
  var isValidInputNodes = document.getElementsByClassName('is-invalid')

  if (isValidInputNodes.length === 1) {
    deleteStudentButtonNode.disabled = true
  } else {
    deleteStudentButtonNode.disabled = false
  }
}

// Función que elimina estudiante

deleteStudentButton.onclick = deleteStudent

function deleteStudent (event) {
  var deleteDni = deleteDniInputNode.value

  var liNode = document.getElementById(deleteDni) //declaro la variable y la llamo con el ID

  mainListNode.removeChild(liNode) // borro el li adentro de la mainlist

  var index = searchStudentIndexByDni(deleteDni, newStudentsList) // armo una variable index q busca el dni q agregue adentro de la new student list

  newStudentsList.splice(index, 1) // borro del LS 1 solo item adentro de esa variable q cree

  setLocalList(LS_KEY, newStudentsList)

  // Limpieza del formulario
  deleteDniInputNode.value = ''

  deleteDniInputNode.classList.remove('is-valid')

  deleteStudentButton.disabled = true
  console.log(newStudentsList)
}

/**
 * Función que permite buscar la posición de un estudiante en el array,
 * comparando nombre o apellido por valor exacto
 * @param {String} nameOrLastName 
 * @param {Array} studentsList 
 */

function searchStudentIndexByText (nameOrLastName, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      includesText(nameOrLastName, student.firstName) ||
      includesText(nameOrLastName, student.lastName)
    ) {
      index = i
      break
    }
  }
  return index
}

// busqueda parcial
function includesText (text, baseText) {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

var searchTextInputNode = document.getElementById('searchText')
var searchStudentButtonNode = document.getElementById('searchStudentButton')
var searchListNode = document.getElementById('searchList')

searchStudentButtonNode.onclick = showStudent //llamo a la funcion en el click

function showStudent (event) {
  searchedStudent = searchTextInputNode.value // lo q busque en ese imput

  var foundStudent = searchStudentIndexByText(searchedStudent, newStudentsList) // armo una variable que me dice la posicion dentro de la lista del alumno q busque

  searchListNode.innerHTML = '' // vacio el html

  // si lo encuentra que haga un apendChild de esa posicion q encontro en searchList
  if (foundStudent !== -1) {
    var foundtudentNode = createStudentNode(newStudentsList[foundStudent]) //
    searchListNode.appendChild(foundtudentNode)
  } else {
    alert('no se encontro el estudiante')
  }
}
