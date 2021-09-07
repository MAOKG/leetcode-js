/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length
    const visited = new Array(n).fill(false)
    let count = 0
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            count++
            dfs(isConnected, visited, i)
        }
    }

    return count
}

var dfs = function (isConnected, visited, i) {
    const n = isConnected.length
    visited[i] = true
    for (let j = 0; j < n; j++) {
        if (!visited[j] && isConnected[i][j] === 1) {
            dfs(isConnected, visited, j)
        }
    }
}

module.exports = findCircleNum
// runtime 35%
// memory 60%
