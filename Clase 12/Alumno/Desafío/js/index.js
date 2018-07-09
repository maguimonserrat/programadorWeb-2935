var inputJQNodes = $('input')

inputJQNodes.blur(validateInput)

function validateInput (event) {
  var inputJQNode = $(this)

  if (
    // inputJQNode.val() && (lo saco xq no hace falta, si se cumple lo da abajo ya está ok o no?)
    inputJQNode.val().indexOf('@' && '.') > -1
  ) {
    {
      inputJQNode.removeClass('is-invalid').addClass('is-valid')
    }
  } else {
    inputJQNode.removeClass('is-valid').addClass('is-invalid')
  }
}
