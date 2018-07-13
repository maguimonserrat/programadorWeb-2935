$(document).ready(function () {
  var deletedLineNode = $('#1')
  var deleteButtonNode = $('.btn')

  deleteButtonNode.click(removeElementWithAnimation)

  function removeElementWithAnimation (event) {
    var deleteButtonNode = $(this)
    deletedLineNode.fadeOut(3000, function () {
      deletedLineNode.remove()
    })
  }
})
