//❗Task
// Initially a number 1 is written on a board. It is possible to do the following operations with it:
//
//  multiply the number by 3; increase the number by 5. Your task is to determine that using this two operations step by step, is it possible to obtain number n?
//
// Example
// For n = 1, the result should be true.
//
// 1 = 1
//
// For n = 2, the result should be false.
//
// For n = 3, the result should be true.
//
// 1 x 3 = 3
//
// For n = 4, the result should be false.
//
// For n = 5, the result should be false.
//
// For n = 6, the result should be true.
//
// 1 + 5 = 6
//
// For n = 18, the result should be true.
//
// 1 + 5 = 6  --> 6 x 3 = 18
//
// For n = 32, the result should be true.
//
// 1 x 3 x 3 x 3 = 27  --> 27 + 5 = 32
//
// For n = 100, the result should be false.
//
// For n = 101, the result should be true.
//
// 1 + 5 + 5 + 5 ... +5 = 101
//
// Input / Output
// [input] integer n
// positive integer, n ≤ 100000
//
// [output] a boolean value
// true if N can be obtained using given operations, false otherwise.

function numberIncreasing(n) {
    if (n < 100000) {
        let dp = new Array(n + 1).fill(false);
        dp[1] = true;
        for (let i = 1; i <= n; i++) {
            if (dp[i]) {
                if (i + 5 <= n) dp[i + 5] = true;
                if (i * 3 <= n) dp[i * 3] = true;
            }
        }
        return dp[n];
    }
}

console.log(numberIncreasing(4))
