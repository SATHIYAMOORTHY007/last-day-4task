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
