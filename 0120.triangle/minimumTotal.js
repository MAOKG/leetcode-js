/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length
    if (n === 1) {
        return triangle[0][0]
    }
    const memo = new Array(n).fill(0)
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            memo[j] += triangle[i][j]
        }
        for (let j = 0; j < i; j++) {
            memo[j] = Math.min(memo[j], memo[j + 1])
        }
    }
    return memo[0]
}

module.exports = minimumTotal
// runtime 95%
// memory 38%
