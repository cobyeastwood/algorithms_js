// Quick Sort Algorithm
// @Params (1) array: array integers

// @BigO O(n log n)
// @BigOmega Ω(n²)

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
