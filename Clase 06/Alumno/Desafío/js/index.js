function includesText (text1, text2) {
  if (typeof text1 === 'string' && typeof text2 === 'string') {
    var text1LowerCase = text1.toLowerCase()
    var text2LowerCase = text2.toLowerCase()
    if (text2LowerCase.indexOf(text1LowerCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

console.log(includesText('Pa', 'Patricia')) // Deberá devolver true

console.log(includesText('paT', 'patricIA'))

console.log(includesText('Patricia', 'Pa')) // Deberá devolver false

console.log(includesText(2, 'Pa')) // Deberá devolver false

// var numbers = [ 1, 2, 3, 4, 5 ]

// var numbers2

// function deleteElement (index, elements) {
//   if (Array.isArray(elements)) {
//     var numbers2 = numbers.slice()
//     numbers2.splice(index, 1)
//     return numbers2
//   } else {
//     return elements
//   }
// }

// console.log('Array copia ', deleteElement(2, numbers))
// console.log('Array original ', numbers)
