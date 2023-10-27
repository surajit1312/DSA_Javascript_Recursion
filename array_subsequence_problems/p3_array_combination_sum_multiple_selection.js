/**
 * Print combination sum from array elements and pick an element multiple times to match a given sum K
 *
 * input = [2, 3, 6, 7, 1]
 *
 * K = 7
 *
 * output =
 * [ 2, 2, 2, 1 ],
 * [ 2, 2, 3 ],
 * [ 2, 2, 1, 1, 1 ],
 * [ 2, 3, 1, 1 ],
 * [ 2, 1, 1, 1, 1, 1 ],
 * [ 3, 3, 1 ],
 * [ 3, 1, 1, 1, 1 ],
 * [ 6, 1 ],
 * [ 7 ],
 * [ 1, 1, 1, 1, 1, 1, 1 ]
 *
 * TC: O(2^t (exponential) + K (to put elements ds into ans))
 * SC: O(k (total length of input) * x (combinations))
 *
 **/

function findAllCombinationSum(arr, target, index, ds, ans) {
  // Base case
  if (index === arr.length) {
    if (target === 0) {
      ans.push([...ds]);
    }
    return;
  }
  // Take
  if (arr[index] <= target) {
    ds.push(arr[index]);
    findAllCombinationSum(arr, target - arr[index], index, ds, ans);
    // Backtrack
    ds.pop();
  }
  // Not Take
  findAllCombinationSum(arr, target, index + 1, ds, ans);
}

const input1 = [2, 3, 6, 7, 1];
const targetSum1 = 7;
const ds1 = [];
const ans1 = [];
findAllCombinationSum(input1, targetSum1, 0, ds1, ans1);
console.log("All subsequences with sum " + targetSum1 + " are: ", ans1);
