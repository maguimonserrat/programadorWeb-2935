var numbers = [ 1, 2, 3, 4, 5 ]

var numbers2

function deleteElement (index, elements) {
  if (Array.isArray(elements)) {
    var numbers2 = numbers.slice()
    numbers2.splice(index, 1)
    return numbers2
  } else {
    return elements
  }
}

console.log('Array copia ', deleteElement(2, numbers))
console.log('Array original ', numbers)
