//Do the below programs in arrow functions.

//Sum of all numbers in an array

const sumOfNumbers = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0)
}

const inputArray = [1, 2, 3, 4, 5]
const sum = sumOfNumbers(inputArray)

console.log(sum)
