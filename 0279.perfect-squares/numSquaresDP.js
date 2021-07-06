/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const memo = new Array(n + 1).fill(Infinity)
    memo[0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            memo[i] = Math.min(memo[i], 1 + memo[i - j * j])
        }
    }
    return memo[n]
}

module.exports = numSquares
// runtime 75%
// memory 75%
