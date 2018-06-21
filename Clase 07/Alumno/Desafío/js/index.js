//console.log('holis')

// var studentsList = [
//   'CARLOS',
//   'GERONIMO',
//   'NICOLAS',
//   'LUCAS',
//   'MARIA',
//   'FEDERICO',
//   'ANTONIO',
//   'LORNA',
//   'JULIAN',
//   'DIEGO',
//   'DANIELA',
//   'JUAN',
//   'MATEO',
//   'BARBARA',
//   'AGUSTIN',
//   'MARIO',
//   'MARIEL',
//   'ANA',
//   'FLORENCIA'
// ]

//transforma los datos a json
//var stringifyStudentsList = JSON.stringify(studentsList)

//los pone en el localStorage una key q se llama list
//localStorage.setItem('list', stringifyStudentsList)

//los mete en una variable q se llama savedStudentsList
//var savedStudentsList = localStorage.getItem('list')

// guarda la lista y lo transforma en un string
//var saveLocalList = JSON.parse(savedStudentsList)

//console.log(saveLocalList)

//si la lista en el local storage no existe que devuelva un array vacio

function getLocalList (key, array) {
  if (typeof key === 'string' && Array.isArray(array)) {
    var savedStudentsList = localStorage.getItem(key)
    if (savedStudentsList) {
      var saveLocalList = JSON.parse(savedStudentsList)
      return saveLocalList
    } else {
      return []
    }
  }
}

var studentsList = getLocalList('studentsList')

console.log(studentsList)
