/**
 * Print Sum of N Numbers using recursion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 *
 * Recursion Tree shown below:
 *
 * F (3)                    ------- Returns Up --> 6
 *  \
 *   3 + F (2)              ------- Returns Up --> 3 + Returns 3
 *   \
 *    2 + F (1)             ------- Returns Up --> 2 + Returns 1
 *    \
 *     1 + F (0)            ------- Returns Up --> 1 + Returns 0 (Base condition) = 1
 *
 **/
function printSumOfN(N) {
  // Base condition
  if (N == 0) {
    return 0;
  }
  return N + printSumOfN(N - 1);
}

console.log("Print Sum of N Numbers using recursion");

const N = 3;
const sum = printSumOfN(3);
console.log("Sum of 1st " + N + " numbers : " + sum);
