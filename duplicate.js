//Remove duplicates from an array
//Anonymous Function:

const removeDuplicates = function (arr) {
  return [...new Set(arr)]
}

const inputArray = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = removeDuplicates(inputArray)

console.log(uniqueArray)

//IIFE (Immediately Invoked Function Expression):
let d = (function () {
  const removeDuplicates = function (arr) {
    return [...new Set(arr)]
  }

  const inputArray = [1, 2, 2, 3, 4, 4, 5]
  const uniqueArray = removeDuplicates(inputArray)

  console.log(uniqueArray)
})()
