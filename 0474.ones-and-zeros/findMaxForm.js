/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const zeros = new Array(strs.length).fill(0)
    const ones = new Array(strs.length).fill(0)
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] === '0') {
                zeros[i]++
            } else {
                ones[i]++
            }
        }
    }
    const memo = new Array(strs.length)
        .fill(0)
        .map(ele =>
            new Array(m + 1).fill(0).map(ele => new Array(n + 1).fill(-1))
        )

    return getMax(m, n, 0, zeros, ones, memo)
}

var getMax = function(m, n, index, zeros, ones, memo) {
    if (index >= zeros.length) {
        return 0
    }
    if (memo[index][m][n] > -1) {
        return memo[index][m][n]
    }
    if (zeros[index] > m || ones[index] > n) {
        return getMax(m, n, index + 1, zeros, ones, memo)
    }
    let val1 = getMax(m, n, index + 1, zeros, ones, memo)
    let val2 =
        1 +
        getMax(m - zeros[index], n - ones[index], index + 1, zeros, ones, memo)
    memo[index][m][n] = Math.max(val1, val2)

    return memo[index][m][n]
}

module.exports = findMaxForm
// runtime 38%
// memory 32%
