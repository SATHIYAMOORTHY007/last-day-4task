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

const a = (function (arr) {
  const titleCapsArray = arr.map(function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  })
  console.log(titleCapsArray)
})(string)
