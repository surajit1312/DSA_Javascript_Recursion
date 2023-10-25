/**
 * Print Factorial of N using recursion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 *
 * Recursion Tree shown below:
 *
 * fact (5)                      ------- Returns Up --> 120
 *  \
 *   5 * fact (4)                ------- Returns Up --> 5 * 24 = 120
 *   \
 *    4 * fact (3)               ------- Returns Up --> 4 * 6 = 24
 *    \
 *     3 * fact (2)              ------- Returns Up --> 3 * 2 = 6
 *     \
 *      2 * fact (1)             ------- Returns Up --> 2 * 1 = 2
 *      \
 *       1 * fact (0)            ------- Returns Up --> 1 * Returns 1 (Base condition) = 1
 *
 **/
function factorial(N) {
  // Base condition
  if (N == 0) {
    return 1;
  }
  return N * factorial(N - 1);
}

console.log("Print Factorial of N using recursion");

const N = 5;
const fact = factorial(5);
console.log("Factorial of " + N + " : " + fact);
