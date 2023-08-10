//Using an Anonymous Function:
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const findPrimes = function (arr) {
  const isPrime = function (number) {
    if (number <= 1) return false
    if (number <= 3) return true
    if (number % 2 === 0 || number % 3 === 0) return false

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false
    }

    return true
  }

  return arr.filter(function (number) {
    return isPrime(number)
  })
}

const primeNumbers = findPrimes(numbers)
console.log(primeNumbers)

//Using an IIFE (Immediately Invoked Function Expression):

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let a = (function (arr) {
  const isPrime = function (number) {
    if (number <= 1) return false
    if (number <= 3) return true
    if (number % 2 === 0 || number % 3 === 0) return false

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false
    }

    return true
  }

  const primeNumbers = arr.filter(function (number) {
    return isPrime(number)
  })

  console.log(primeNumbers)
})(numbers)
