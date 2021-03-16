/* Binary Search Algorithm

  @description: given a sorted array, divide and conquer by systematically eliminating half of the remaining elements in the search for the target element
  @params: (a, k, n) a: Int Array (sorted), k: Int, n: Int Array Length

  @BigO: O(log n)
  @BigOmega: Ω(log n)
*/

function binarySearch(a, k, n = a.length) {
  // Base case
  if (!n) return false;

  // Find middle index
  let middle = Math.floor(n / 2);

  let left = a.slice(0, middle); // slice won't include middle
  let right = a.slice(middle + 1);

  // Call recursively
  return k < a[middle]
    ? binarySearch(left, k)
    : k > a[middle]
    ? binarySearch(right, k)
    : true;
}

console.log(binarySearch([1, 2, 3, 4], 4));
