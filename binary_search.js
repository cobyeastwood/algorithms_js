// Binary Search Algorithm
// @Params (1) array: array integers (sorted), (2) target: integer

// @Big-O O(log n)
// @Big-Omega Ω(log n)

function binarySearch(array, target, length = array.length) {
  // Base case
  if (!length) return false;

  // Find middle index
  let mid = Math.floor(length / 2);

  let left = array.slice(0, mid); // slice won't include mid
  let right = array.slice(mid + 1);

  // Call recursively
  return target < array[mid]
    ? binarySearch(left, target)
    : target > array[mid]
    ? binarySearch(right, target)
    : true;
}

console.log(binarySearch([1, 2, 3, 4], 4));
