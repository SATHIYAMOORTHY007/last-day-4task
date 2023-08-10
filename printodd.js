//Do the below programs in arrow functions.
//Print odd numbers in an array
const printOddNumbers = (arr) => {
  for (const num of arr) {
    if (num % 2 !== 0) {
      console.log(num)
    }
  }
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
printOddNumbers(inputArray)
