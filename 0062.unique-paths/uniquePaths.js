/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = new Array(m).fill(0).map(ele => new Array(n).fill(0))
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 || j === n - 1) {
                memo[i][j] = 1
            } else {
                if (m > 1) {
                    memo[i][j] += memo[i + 1][j]
                }
                if (n > 1) {
                    memo[i][j] += memo[i][j + 1]
                }
            }
        }
    }

    return memo[0][0]
}

module.exports = uniquePaths
// runtime 75%
// memory 20%
