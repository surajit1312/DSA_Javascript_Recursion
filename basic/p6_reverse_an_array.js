/**
 * Print Reverse of an array using recursion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 *
 * Using double pointers low & high
 *
 * Recursion Tree shown below:
 *
 * reverseArray (arr, 7, 0, 6)                  ------- Returns Reversed array
 *  \
 *   reverseArray (arr, 7, 1, 5)                ------- Returns Reversed segment of array
 *   \
 *    reverseArray (arr, 7, 2, 4)               ------- Returns Reversed segment of array
 *    \
 *     reverseArray (arr, 7, 3, 3)              ------- Returns Reversed segment of array after hitting base case low >= high
 *
 **/

function reverseArray(arr, n, low, high) {
  if (low >= high) {
    return arr;
  }
  swap(arr, low, high);
  return reverseArray(arr, n, low + 1, high - 1);
}

function swap(arr, low, high) {
  arr[low] = arr[low] ^ arr[high];
  arr[high] = arr[low] ^ arr[high];
  arr[low] = arr[low] ^ arr[high];
}

const input1 = [4, 7, 1, -2, 7, 9, 0];
const N1 = 7;

let low = 0,
  high = N1 - 1;

console.log("Input Array : ", input1);

const reverse1 = reverseArray(input1, N1, low, high);

console.log("Reversed Array : ", reverse1);

/**
 * Print Reverse of an array using recursion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 *
 * Using only single pointer of (i >= N / 2)
 *
 * Recursion Tree shown below:
 *
 * reverseArraySinglePointer (arr, 6, 0)                  ------- Returns Reversed array
 *  \
 *   reverseArraySinglePointer (arr, 6, 1)                ------- Returns Reversed segment of array
 *   \
 *    reverseArraySinglePointer (arr, 6, 2)               ------- Returns Reversed segment of array
 *    \
 *     reverseArraySinglePointer (arr, 6, 3)              ------- Returns Reversed segment of array after hitting base case i >= (N/2)
 *
 **/

function reverseArraySinglePointer(arr, n, i) {
  if (i >= Math.abs(n / 2)) {
    return arr;
  }
  swap(arr, i, n - i - 1);
  return reverseArraySinglePointer(arr, n, i + 1);
}

const input2 = [8, 6, -10, 0, 6, -9];
const N2 = 6;

console.log("Input Array : ", input2);

const reverse2 = reverseArraySinglePointer(input2, N2, 0);

console.log("Reversed Array : ", reverse2);
