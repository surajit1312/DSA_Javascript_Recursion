/**
 * Print all array subsequence with a given sum K
 *
 * input = [1, 2, 1]
 * K = 2
 * output = [1, 1] and [2]
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

function getAllSubsequences(arr, K, calculatedSum, index, ans) {
  if (index === arr.length) {
    if (calculatedSum === K) {
      console.log(ans);
    }
    return;
  }
  // Take
  ans.push(arr[index]);
  calculatedSum = calculatedSum + arr[index];
  getAllSubsequences(arr, K, calculatedSum, index + 1, ans);
  // Not Take
  ans.pop();
  calculatedSum = calculatedSum - arr[index];
  getAllSubsequences(arr, K, calculatedSum, index + 1, ans);
}

const input1 = [1, 2, 1];
const targetSum1 = 2;
const output1 = getAllSubsequences(input1, targetSum1, 0, 0, []);
console.log("All subsequences with sum " + targetSum1 + " are: ", output1);

const input2 = [1, 6, 5, 7, 2];
const targetSum2 = 8;
const output2 = getAllSubsequences(input2, targetSum2, 0, 0, []);
console.log("All subsequences with sum " + targetSum2 + " are: ", output2);
