/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const result = { count: 0 }
    const col = new Array(n).fill(false)
    const dia1 = new Array(2 * n - 1).fill(false)
    const dia2 = new Array(2 * n - 1).fill(false)
    dfs(0, n, col, dia1, dia2, result)

    return result.count
}

var dfs = function(i, n, col, dia1, dia2, result) {
    if (i === n) {
        result.count++
        return
    }
    for (let j = 0; j < n; j++) {
        if (!col[j] && !dia1[n - 1 - (i - j)] && !dia2[i + j]) {
            col[j] = true
            dia1[n - 1 - (i - j)] = true
            dia2[i + j] = true
            dfs(i + 1, n, col, dia1, dia2, result)
            col[j] = false
            dia1[n - 1 - (i - j)] = false
            dia2[i + j] = false
        }
    }
}

module.exports = totalNQueens
// runtime 99%
// memory 54%
