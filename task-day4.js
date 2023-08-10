//Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//Using an Anonymous Function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const printOddNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i])
    }
  }
}

printOddNumbers(numbers)

//Using an IIFE (Immediately Invoked Function Expression):
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10](function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i])
    }
  }
})(n)

//Using an Anonymous Function:
const num = [1, 2, 3, 4, 5]

const calculateSum = function (arr) {
  let sum = 0
  arr.forEach(function (num) {
    sum += num
  })
  return sum
}

const totalSum = calculateSum(num)
console.log(totalSum)

//Using an IIFE (Immediately Invoked Function Expression)
const n1 = [1, 2, 3, 4, 5](function (arr) {
  let sum = 0
  arr.forEach(function (number) {
    sum += number
  })
  console.log(sum)
})(n1)

//Do the below programs in arrow functions.

//Return all the prime numbers in an array
const isPrime = (num) => {
  if (num <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const findPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num))
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const primeNumbers = findPrimeNumbers(inputArray)

console.log(primeNumbers)

//e.Return all the palindromes in an array

const isPalindrome = (str) => str === str.split('').reverse().join('')

const findPalindromes = (arr) => arr.filter((str) => isPalindrome(str))

const inputArray = ['level', 'hello', 'world', 'deed', 'open', 'racecar']
const palindromes = findPalindromes(inputArray)

console.log(palindromes)
