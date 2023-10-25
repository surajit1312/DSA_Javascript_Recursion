console.log("Print Name N times");

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
