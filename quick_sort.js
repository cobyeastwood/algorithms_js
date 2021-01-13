// Quick Sort Algorithm
// @Params (1) array: array integers

// @Big-O O(n log n)
// @Big-Omega Ω(n²)

function quickSort(array, length = array.length) {
  // Base case
  if (length <= 1) return array;

  let zero = array.shift();

  // Seperate
  let lt = array.filter(c => c < zero);
  let rt = array.filter(c => c >= zero);

  // Call on result
  return [...quickSort(lt), zero, ...quickSort(rt)];
}

console.log(quickSort([9, 4, 2, 3, 7]));
