var firstNameNode = document.getElementById('firstName')

firstNameNode.onblur = validateName

function validateName (event) {
  var node = event.target

  console.log(node.value)
  if (node.value.length > 0) {
    console.log('Nombre ingresado')
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  } else {
    console.log('Nombre requerido')
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
}
