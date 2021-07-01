/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const curr = []
    const results = []
    const col = new Array(n).fill(false)
    const dia1 = new Array(2 * n - 1).fill(false)
    const dia2 = new Array(2 * n - 1).fill(false)
    dfs(curr, n, col, dia1, dia2, results)

    const boards = results.map(result => getBoard(result, n))

    return boards
}

var dfs = function(curr, n, col, dia1, dia2, results) {
    let i = curr.length
    if (i === n) {
        results.push([...curr])
        return
    }
    for (let j = 0; j < n; j++) {
        if (!col[j] && !dia1[n - 1 - (i - j)] && !dia2[i + j]) {
            col[j] = true
            dia1[n - 1 - (i - j)] = true
            dia2[i + j] = true
            curr.push([i, j])
            dfs(curr, n, col, dia1, dia2, results)
            curr.pop()
            col[j] = false
            dia1[n - 1 - (i - j)] = false
            dia2[i + j] = false
        }
    }
}

var getBoard = function(result, n) {
    const row = new Array(n).fill('.').join('')
    const board = result.map(ele => {
        let j = ele[1]
        return row.substring(0, j) + 'Q' + row.substring(j + 1)
    })

    return board
}

module.exports = solveNQueens
// runtime 98%
// memory 70%
