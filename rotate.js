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
let ro = (function () {
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
