/**
 * Print count of all unique combination sum from array elements to match a given sum K
 *
 * input = [2, 3, 6, 7, 1, 2]
 *
 * K = 7
 *
 * output = 3 -> [2, 3, 2], [6, 1] and [7]
 **/

function getCountOfAllPossibleSubsequences(
  arr,
  target,
  index,
  calculatedSum,
  ds,
  count
) {
  if (index === arr.length) {
    if (calculatedSum === target) {
      count = 1;
    } else {
      count = 0;
    }
    return count;
  }
  // Take
  calculatedSum += arr[index];
  ds.push(arr[index]);
  let lcount = getCountOfAllPossibleSubsequences(
    arr,
    target,
    index + 1,
    calculatedSum,
    ds,
    count
  );
  // Not take
  calculatedSum -= arr[index]; // Backtrack
  ds.pop(); // Backtrack
  let rcount = getCountOfAllPossibleSubsequences(
    arr,
    target,
    index + 1,
    calculatedSum,
    ds,
    count
  );
  return lcount + rcount;
}

const input1 = [2, 3, 6, 7, 1, 2];
const targetSum1 = 7;
let count1 = getCountOfAllPossibleSubsequences(input1, targetSum1, 0, 0, [], 0);
console.log(
  "Count of all possible subsequences with sum " + targetSum1 + " are: ",
  count1
);
