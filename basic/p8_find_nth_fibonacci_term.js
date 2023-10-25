/**
 * Find Nth Fibonacci Term using recursion - 0, 1, 1, 2, 3, 5
 * TC: O(2^N)
 * SC: O(2^N)
 *
 * Using only single pointer of (i >= N / 2)
 *
 * Recursion Tree shown below:
 *
 *                                                  getFibo (5)
 *                                                  (3 + 2 = 5)
 *                                                /           \
 *                                              /              \
 *                                            /                 \
 *                                          /                    \
 *                                        /                       \
 *                                      /                          \
 *                                    /                             \
 *                                  /                                \
 *                       getFibo (4)                                   getFibo(3)
 *                        (2 + 1 = 3)                                   (1 + 1 = 2)
 *                       /          \                                   /       \
 *                     /             \                                /          \
 *              getFibo (3)           getFibo (2)                 getFibo (2)    getFibo (1)
 *              (1 + 1 = 2)           (1 + 0 = 1)                  (1 + 0 = 1)    (1)
 *               /   \                 /       \                     /      \     
 *             /      \              /          \                  /         \
 *     getFibo (2)    getFibo (1)   getFibo(1)  getFibo (0)    getFibo (1)  getFibo(0)
 *      (1 + 0 = 1)    (1)              (1)         (0)           (1)            (0)
 *     /       \                    
 *   /          \
 * getFibo (1)  getFibo(0)
 *  (1)            (0)
 **/

function getFibonacciTerm(N) {
  if (N <= 1) {
    return N;
  }
  return getFibonacciTerm(N - 1) + getFibonacciTerm(N - 2);
}

const N = 5;
const fiboN = getFibonacciTerm(N);
console.log(N + "th Fibonacci term : " + fiboN);
