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
let m = (function () {
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
