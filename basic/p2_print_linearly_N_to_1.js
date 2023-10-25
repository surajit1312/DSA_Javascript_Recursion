console.log("Print Numbers N to 1");
/**
 * Print Numbers N to 1 using recusrion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 */

const N = 7;

function printNum(N) {
  if (N == 0) {
    return;
  }
  console.log(N);
  printNum(N - 1);
}

printNum(N);
