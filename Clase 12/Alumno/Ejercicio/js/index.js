var containerJQNodes = $('.square')

containerJQNodes.click(tateti)

var player = true

function tateti (event) {
  var containerJQNode = $(this)

  if (player === true) {
    containerJQNode.addClass('circle')
    player = false
  } else {
    containerJQNode.addClass('cross')
    player = true
  }
}

// si es el click es true containerJQNode.addClass('circle')
// si es segundo click containerJQNode.addClass('cross')
