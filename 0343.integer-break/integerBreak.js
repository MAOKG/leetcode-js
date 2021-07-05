/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const memo = new Array(n + 1).fill(0)
    memo[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            memo[i] = Math.max(memo[i], j * (i - j), j * memo[i - j])
        }
    }
    return memo[n]
}

module.exports = integerBreak
// runtime 70%
// memory 17%
