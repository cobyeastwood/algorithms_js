/* 
  Quick Sort Algorithm

  @description: select a pivot element from the array and partitioning the other elements into two sub-arrays, according to if they are less than or greater than the pivot
  @params: (a, n) a Int Array, n Int Array Length

  @BigO: O(n log n)
  @BigOmega: Ω(n²)
*/

function quickSort(a, n = array.length) {
  // Base case
  if (n <= 1) return a;

  let zero = a.shift();

  // Seperate
  let lt = a.filter(c => c < zero);
  let rt = a.filter(c => c >= zero);

  // Call on result
  return [...quickSort(lt), zero, ...quickSort(rt)];
}

console.log(quickSort([9, 4, 2, 3, 7]));
