/**
 * Print any array subsequence with a given sum K
 * 
 * input = [1, 2, 1]
 * K = 2
 * output = [1, 1] or [2]
 * 
 *                              [1, 2, 1]
 *                        f(i = 0, a = [], s = 0)
 *                         /                     \
 *                  Take /                        \ Not Take
 *                     /                           \
 *           f(i= 1, a = [1], s = 1)                f(i = 1, a = [], s = 0)
 *             /                 \                           /            \
 *       Take /                   \ Not Take          Take  /              \ Not Take
 *           /                     \                       /                \
 *         f(i = 2,                 f(i = 2,              f(i = 2,            f(i = 2, 
 *         a = [1, 2])                a = [1])              a = [2]             a = []
 *         s= 3)                      s = 1)                s = 2)              s = 0)
 *        /        \                  /       \               |                /      \
 *  Take /          \ Not Take  Take /         \ Not Take     |          Take /        \ Not Take
 *      /            \              /           \             |              /          \
 *  f(i = 3,        f(i = 3,       f(i = 3,     f(i = 3,      |           f(i = 3,      f(i = 3,
 *  a = [1, 2, 1])   a = [1, 2])    a = [1, 1]    a = [1]     |             a = [1],      a = [],
 *  s= 4)            s = 3)         s = 2)        s = 1)     / \            s = 1)        s = 0)
 *                                                          /   \
 *                                                    Take /     \ Not Take
 *                                                        /       \
 *                                                     f(i = 3,   f(i = 3,
 *                                                  a = [2, 1],   a = [2],
 *                                                  s = 3)        s = 2)
 *     
 * 
**/

function getAnySubsequence(arr, K, calculatedSum, index, ans) {
  if (index === arr.length) {
    if (calculatedSum === K) {
      console.log(ans);
      return true;
    } else {
      return false;
    }
  }
  // Take
  ans.push(arr[index]);
  calculatedSum += arr[index];
  if (getAnySubsequence(arr, K, calculatedSum, index + 1, ans)) {
    return true;
  }
  // Not Take
  ans.pop(); // Backtracking
  calculatedSum -= arr[index]; // Backtracking
  if (getAnySubsequence(arr, K, calculatedSum, index + 1, ans)) {
    return true;
  }
  return false;
}

const input1 = [1, 2, 1];
const targetSum1 = 2;
const ans1 = [];
getAnySubsequence(input1, targetSum1, 0, 0, ans1);
console.log("All subsequences with sum " + targetSum1 + " are: ", ans1);

const input2 = [1, 6, 5, 7, 2];
const targetSum2 = 8;
const ans2 = [];
getAnySubsequence(input2, targetSum2, 0, 0, ans2);
console.log("All subsequences with sum " + targetSum2 + " are: ", ans2);
