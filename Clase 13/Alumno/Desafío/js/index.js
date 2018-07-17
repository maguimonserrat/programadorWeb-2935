$(document).ready(function () {
  console.log('App init')

  // Función que valida si habilitar o no el botón de agregar

  var submitButtonNode = document.getElementById('submitButton')

  function validateButton () {
    var isValidInputNodes = document.getElementsByClassName('is-valid')

    if (isValidInputNodes.length === 3) {
      submitButtonNode.disabled = false
    } else {
      submitButtonNode.disabled = true
    }
  }

  var emailInputNode = $('#email')

  emailInputNode.one('blur', validateEmailField)

  function validateEmailField (event) {
    var inputNode = $(this)

    var value = inputNode.val()

    inputNode.next().remove()

    var errorText = ''

    if (!value) {
      errorText = 'El campo está vacío'
    } else {
      if (value.indexOf('@') === -1) {
        errorText = 'Falta el arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Falta el punto (.)'
      }
    }

    if (errorText) {
      var parentNode = inputNode.parent()
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    //
    var firstNameInputNode = $('#firstName')

    firstNameInputNode.one('blur', validatefirstNameField)

    function validatefirstNameField (event) {
      var inputNode = $(this)

      var value = inputNode.val()

      inputNode.next().remove()

      var errorText = ''

      if (!value) {
        errorText = 'El campo está vacío'
      }

      if (errorText) {
        var parentNode = inputNode.parent()
        parentNode.append(
          '<div class="invalid-feedback">' + errorText + '</div>'
        )

        inputNode.removeClass('is-valid')
        inputNode.addClass('is-invalid')
      } else {
        inputNode.removeClass('is-invalid')
        inputNode.addClass('is-valid')
      }

      if (event.type === 'blur') {
        inputNode.on('input', validatefirstNameField)
      }
    }
    validateButton()
  }
})
