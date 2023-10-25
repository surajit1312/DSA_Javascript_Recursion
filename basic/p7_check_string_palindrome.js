/**
 * Check if a string is Palindrome using recursion
 * TC: O(N)
 * SC: O(N) - Stack space (internal hypothetical memory)
 *
 * Using only single pointer of (i >= N / 2)
 *
 * Recursion Tree shown below:
 *
 * checkPalindrome ("MADAM", 5, 0)                  ------- Returns true
 *  \
 *   checkPalindrome ("MADAM", 5, 1)                ------- Returns true
 *   \
 *    checkPalindrome ("MADAM", 5, 2)               ------- Returns true
 *
 **/

function checkPalindrome(input, n, i) {
  if (i >= Math.floor(n / 2)) {
    return true;
  }
  if (input[i].toLowerCase() !== input[n - i - 1].toLowerCase()) {
    return false;
  }
  return checkPalindrome(input, n, i + 1);
}

const input1 = "MADAM";
const N1 = 5;

console.log(input1 + " is Palindrome ? : ", checkPalindrome(input1, N1, 0));

const input2 = "mAlayaLAM";
const N2 = 9;

console.log(input2 + " is Palindrome ? : ", checkPalindrome(input2, N2, 0));

const input3 = "SalmanaNAkas";
const N3 = 12;

console.log(input3 + " is Palindrome ? : ", checkPalindrome(input3, N3, 0));
