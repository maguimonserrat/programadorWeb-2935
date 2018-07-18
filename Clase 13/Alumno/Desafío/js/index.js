$(document).ready(function () {
  console.log('App init')

  var submitButtonNode = $('#submitButton')
  var emailInputNode = $('#email')
  var firstNameInputNode = $('#firstName')
  var commentsInputNode = $('#comments')

  emailInputNode.one('blur', validateEmailField)
  firstNameInputNode.one('blur', validateField)
  commentsInputNode.one('blur', validateField)

  // Función que valida si habilitar o no el botón de agregar
  function validateButton () {
    var isValidInputNodes = $('.is-valid')

    if (isValidInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }

  // Función que valida el email
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

    appendError(errorText, inputNode, event.type, validateEmailField)
  }

  // Función que valida el nombre y coments
  function validateField (event) {
    var inputNode = $(this)

    var value = inputNode.val()

    inputNode.next().remove()

    var errorText = ''

    if (!value) {
      errorText = 'El campo está vacío'
    }

    appendError(errorText, inputNode, event.type, validateField)
  }

  // Función que explica el error y valida el botón
  function appendError (errorText, inputNode, eventType, cbk) {
    if (errorText) {
      var parentNode = inputNode.parent()
      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
    } else {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    }

    if (eventType === 'blur') {
      inputNode.on('input', cbk)
    }

    validateButton()
  }
})
