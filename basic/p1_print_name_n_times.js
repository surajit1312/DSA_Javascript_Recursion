console.log("Print Name N times");
/**
 * Print Name N times using recusrion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 */
const nameVal = "Surajit";
const N = 7;

function printNameNTimes(nameVal, N, i) {
  if (i > N) {
    return;
  }
  console.log(nameVal);
  printNameNTimes(nameVal, N, i + 1);
}

printNameNTimes(nameVal, N, 1);
