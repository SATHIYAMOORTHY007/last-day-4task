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
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

;(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i])
    }
  }
})(n)

//Using an Anonymous Function
const strings = ['hello world', 'good morning', 'happy new year']

const convertToTitleCaps = function (arr) {
  return arr.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  })
}

const titleCapsStrings = convertToTitleCaps(strings)
console.log(titleCapsStrings)

//Using an IIFE (Immediately Invoked Function Expression):

const string = ['hello world', 'good morning', 'happy new year']

;(function (arr) {
  const titleCapsArray = arr.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  })
  console.log(titleCapsArray)
})(string)

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
const n1 = [1, 2, 3, 4, 5]

;(function (arr) {
  let sum = 0
  arr.forEach(function (number) {
    sum += number
  })
  console.log(sum)
})(n1)

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

;(function (arr) {
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
;(function () {
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

//Return median of two sorted arrays of the same size.
//Anonymous Function:
const findMedianSortedArrays = function (nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b)
  const length = merged.length

  if (length % 2 === 0) {
    const midRight = length / 2
    const midLeft = midRight - 1
    return (merged[midLeft] + merged[midRight]) / 2
  } else {
    const mid = Math.floor(length / 2)
    return merged[mid]
  }
}

const nums1 = [1, 3, 5]
const nums2 = [2, 4, 6]
const median = findMedianSortedArrays(nums1, nums2)

console.log(median)

//IIFE (Immediately Invoked Function Expression):
;(function () {
  const findMedianSortedArrays = function (nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b)
    const length = merged.length

    if (length % 2 === 0) {
      const midRight = length / 2
      const midLeft = midRight - 1
      return (merged[midLeft] + merged[midRight]) / 2
    } else {
      const mid = Math.floor(length / 2)
      return merged[mid]
    }
  }

  const nums1 = [1, 3, 5]
  const nums2 = [2, 4, 6]
  const median = findMedianSortedArrays(nums1, nums2)

  console.log(median)
})()

//Do the below programs in anonymous function & IIFE
//Anonymous Function:
const findMedianSortedArrays = function (nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b)
  const length = merged.length

  if (length % 2 === 0) {
    const midRight = length / 2
    const midLeft = midRight - 1
    return (merged[midLeft] + merged[midRight]) / 2
  } else {
    const mid = Math.floor(length / 2)
    return merged[mid]
  }
}

const nums1 = [1, 3, 5]
const nums2 = [2, 4, 6]
const median = findMedianSortedArrays(nums1, nums2)

console.log(median)

//IIFE (Immediately Invoked Function Expression):
;(function () {
  const findMedianSortedArrays = function (nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b)
    const length = merged.length

    if (length % 2 === 0) {
      const midRight = length / 2
      const midLeft = midRight - 1
      return (merged[midLeft] + merged[midRight]) / 2
    } else {
      const mid = Math.floor(length / 2)
      return merged[mid]
    }
  }

  const nums1 = [1, 3, 5]
  const nums2 = [2, 4, 6]
  const median = findMedianSortedArrays(nums1, nums2)

  console.log(median)
})()

//Remove duplicates from an array
//Anonymous Function:

const removeDuplicates = function (arr) {
  return [...new Set(arr)]
}

const inputArray = [1, 2, 2, 3, 4, 4, 5]
const uniqueArray = removeDuplicates(inputArray)

console.log(uniqueArray)

//IIFE (Immediately Invoked Function Expression):
;(function () {
  const removeDuplicates = function (arr) {
    return [...new Set(arr)]
  }

  const inputArray = [1, 2, 2, 3, 4, 4, 5]
  const uniqueArray = removeDuplicates(inputArray)

  console.log(uniqueArray)
})()

//rotateArray k times using Anonymous Function:
const rotateArray = function (arr, k) {
  const n = arr.length
  k = k % n

  const rotated = [...arr.slice(-k), ...arr.slice(0, n - k)]
  return rotated
}

const inputArray = [1, 2, 3, 4, 5, 6, 7]
const rotations = 3
const rotatedArray = rotateArray(inputArray, rotations)

console.log(rotatedArray)

//IIFE (Immediately Invoked Function Expression):
;(function () {
  const rotateArray = function (arr, k) {
    const n = arr.length
    k = k % n

    const rotated = [...arr.slice(-k), ...arr.slice(0, n - k)]
    return rotated
  }

  const inputArray = [1, 2, 3, 4, 5, 6, 7]
  const rotations = 3
  const rotatedArray = rotateArray(inputArray, rotations)

  console.log(rotatedArray)
})()

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

//Do the below programs in arrow functions.

//Convert all the strings to title caps in a string array
const convertToTitleCaps = (arr) => {
  return arr.map((str) => {
    return str
      .split(' ')
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  })
}

const inputArray = ['hello world', 'this is a test', 'programming is fun']
const titleCapsArray = convertToTitleCaps(inputArray)

console.log(titleCapsArray)

//Do the below programs in arrow functions.

//Sum of all numbers in an array

const sumOfNumbers = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0)
}

const inputArray = [1, 2, 3, 4, 5]
const sum = sumOfNumbers(inputArray)

console.log(sum)

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
