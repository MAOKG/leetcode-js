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
    const memo = Array(m + 1)
        .fill(0)
        .map(ele => new Array(n + 1).fill(0))

    for (let i = 0; i < strs.length; i++) {
        let oneCount = ones[i]
        let zeroCount = zeros[i]
        if (oneCount > n || zeroCount > m) {
            continue
        }
        for (let x = m; x >= zeroCount; x--) {
            for (let y = n; y >= oneCount; y--) {
                let curr = 1 + memo[x - zeroCount][y - oneCount]
                if (curr > memo[x][y]) {
                    memo[x][y] = curr
                }
            }
        }
    }

    return memo[m][n]
}

module.exports = findMaxForm
// runtime 96%
// memory 92%
