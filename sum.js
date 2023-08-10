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
let a = (function (arr) {
  let sum = 0
  arr.forEach(function (number) {
    sum += number
  })
  console.log(sum)
})(n1)
