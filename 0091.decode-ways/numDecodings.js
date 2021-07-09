/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length
    if (s[0] === '0') {
        return 0
    }
    const memo = new Array(n + 1).fill(0)
    memo[n] = 1
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] !== '0') {
            memo[i] = memo[i + 1]
            if (i < n - 1 && Number(s.substring(i, i + 2)) <= 26) {
                memo[i] += memo[i + 2]
            }
        }
    }
    return memo[0]
}

module.exports = numDecodings
// runtime 100%
// memory 60%
