/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    if (obstacleGrid[m - 1][n - 1]) {
        return 0
    }
    const memo = new Array(m).fill(0).map(ele => new Array(n).fill(0))
    memo[m - 1][n - 1] = 1
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (!obstacleGrid[i][j]) {
                if (i < m - 1) {
                    memo[i][j] += memo[i + 1][j]
                }
                if (j < n - 1) {
                    memo[i][j] += memo[i][j + 1]
                }
            }
        }
    }
    return memo[0][0]
}

module.exports = uniquePathsWithObstacles
// runtime 60%
// memory 22%
