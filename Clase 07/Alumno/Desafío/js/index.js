//recibe una key
function getLocalList (key) {
  //chequea que la key sea un string
  if (typeof key === 'string') {
    //recibe la key la devuelve el valor almacenado en esa key
    var savedStudentsList = localStorage.getItem(key)
    if (savedStudentsList) {
      //transforma de JSON a js y lo guarda en esa variable
      var saveLocalList = JSON.parse(savedStudentsList)
      return saveLocalList
    } else {
      return []
    }
  }
}

var studentsList = getLocalList('studentsList')

if (studentsList) {
  // Muestro el resultado de la función
  console.log(studentsList)
  if (studentsList.length) {
    console.log('Tiene guardados ' + studentsList.length + ' estudiantes')
  } else {
    console.log('La lista esta vacía')
  }
} else {
  console.log('Le pase una key incorrecta')
}
