const isPalindrome = (str) => str === str.split('').reverse().join('')

const findPalindromes = (arr) => arr.filter((str) => isPalindrome(str))

const inputArray = ['level', 'hello', 'world', 'deed', 'open', 'racecar']
const palindromes = findPalindromes(inputArray)

console.log(palindromes)
