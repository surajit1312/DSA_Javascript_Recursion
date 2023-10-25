/**
 * Print Numbers N to 1 using recusrion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 */

let N = 7;

/**
 * This approach uses Recursion
 * @param {*} N
 * @param {*} i
 * @returns
 */
function printNum(N, i) {
  if (i > N) {
    return;
  }
  console.log(i);
  printNum(N, i + 1);
}

console.log("Print Numbers 1 to N - Recursion");
printNum(N, 1);

/**
 * This approach uses Recursion
 * @param {*} N
 * @param {*} i
 * @returns
 */

/**
 * Backtracking concept - Recursion Tree shown below:
 *
 * F (3, 3)                ------- Prints 3 and Returns Up
 *  \
 *   F (3, 2)              ------- Prints 2 and Returns Up
 *   \
 *    F (3, 1)             ------- Prints 1 and Returns Up
 *    \
 *     F (3, 0)            ------- Returns Up
 *
 **/
function printNumBackTrack(N, i) {
  if (i === 0) {
    return;
  }
  printNumBackTrack(N, i - 1);
  // Printing this after the recursive call to backtrack
  console.log(i);
}

console.log("Print Numbers 1 to N - Backtracking");
N = 3;
printNumBackTrack(N, N);
