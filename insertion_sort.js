// Insertion Sort Algorithm
// @Params (1) array: array integers

// @BigO O(n²)
// @BigOmega Ω(n²)

// @Space O(1)

function insertionSort(array, length = array.length) {
  // Iterate over all indexes after first
  for (let i = 1; i < length; i++) {
    let current = array[i];
    // Iterate left until met conditional
    for (var j = i - 1; j >= 0 && current < array[j]; j--) {
      array[j + 1] = array[j]; // Push element right
    }
    array[j + 1] = current; // Place element right
  }

  return array;
}

console.log(insertionSort([2, 1, 0]));
