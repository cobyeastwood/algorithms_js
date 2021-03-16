/*
  Sliding Window Algorithm

  @description: find max sum of values for a given window size
  @params: (a, k, n) a Int Array, k Window, n Int Array Length
  @BigO: O(n)
*/

function SlidingWindow(a, k, n = a.length) {
  let max = Number.NEGATIVE_INFINITY; // Max Negative Value

  // Iterate Over Array for Length - Window Size + 1
  for (let i = 0; i < n - k + 1; i++) {
    let sum = 0;

    // Iterate Over Element for Window Size
    for (let j = 0; j < k; j++) {
      sum += a[i + j];
    }

    // Identify Max Sum
    sum > max ? (max = sum) : '';
  }

  return max;
}

console.log(SlidingWindow([100, 200, 300, 400], 2)); // 700
