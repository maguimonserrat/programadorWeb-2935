var inputJQNodes = $('input')

inputJQNodes.blur(validateInput)

function validateInput (event) {
  var inputJQNode = $(this)
  var value = inputJQNode.val()

  if (value && value.indexOf('@') > -1 && value.indexOf('.') > -1) {
    {
      inputJQNode.removeClass('is-invalid')
      inputJQNode.addClass('is-valid')
    }
  } else {
    inputJQNode.removeClass('is-valid')
    inputJQNode.addClass('is-invalid')
  }
}
