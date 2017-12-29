var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
//arrays chocolateBars is an array containing

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}
