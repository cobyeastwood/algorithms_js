// Binary Search Algorithm
// @Params (1) array: array integers (sorted), (2) target: integer

// @BigO O(log n)
// @BigOmega Ω(log n)

function binarySearch(array, target, length = array.length) {
  // Base case
  if (!length) return false;

  // Find middle index
  let middle = Math.floor(length / 2);

  let left = array.slice(0, middle); // slice won't include middle
  let right = array.slice(middle + 1);

  // Call recursively
  return target < array[middle]
    ? binarySearch(left, target)
    : target > array[middle]
    ? binarySearch(right, target)
    : true;
}

console.log(binarySearch([1, 2, 3, 4], 4));
