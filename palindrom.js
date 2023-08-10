//Do the below programs in anonymous function & IIFE
//Return all the palindromes in an array
const isPalindrome = function (str) {
  return str === str.split('').reverse().join('')
}

const findPalindromes = function (arr) {
  return arr.filter(isPalindrome)
}

const inputArray = ['level', 'hello', 'world', 'deed', 'open', 'racecar']
const palindromes = findPalindromes(inputArray)

console.log(palindromes)

//Anonymous Function:
const a = (function () {
  const isPalindrome = function (str) {
    return str === str.split('').reverse().join('')
  }

  const findPalindromes = function (arr) {
    return arr.filter(isPalindrome)
  }

  const inputArray = ['level', 'hello', 'world', 'deed', 'open', 'racecar']
  const palindromes = findPalindromes(inputArray)

  console.log(palindromes)
})()
