var emailNode = document.getElementById('email')

emailNode.onblur = validateMail

function validateMail (event) {
  var node = event.target
  if (
    node.value &&
    node.value.length > 0 &&
    node.value.indexOf('@') !== -1 &&
    node.value.indexOf('.') !== -1
  ) {
    console.log('Email ingresado')
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  } else {
    console.log('Email requerido')
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
}
