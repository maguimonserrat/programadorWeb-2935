// # Crear una función que permita guardar un Array en el localStorage [Pieza del Workshop I]

// - La función tiene que recibir como parámetros una key y un Array y convertir el Array en JSON para guardarlo en el localStorge. La función tiene que validar los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni guardar nada.

// **Datos de prueba:**

// ```js
// var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

// saveLocalList('studentsList', studentsList) // Guarda la lista en el localStorage en formato JSON
// ```

// Datos de prueba
var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

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

// Pruebo la función
setLocalList('studentsList', studentsList)
