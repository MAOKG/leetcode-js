/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const row = new Array(9).fill(0).map(ele => new Array(9).fill(false))
    const col = new Array(9).fill(0).map(ele => new Array(9).fill(false))
    const box = new Array(9).fill(0).map(ele => new Array(9).fill(false))
    const result = { done: false }
    scan(board, 0, 0, row, col, box)
    dfs(board, 0, 0, row, col, box, result)
}

var dfs = function(board, i, j, row, col, box, result) {
    if (i === 9) {
        result.done = true
        return
    }
    if (result.done) {
        return
    }
    let boxIndex = getBoxIndex(i, j)
    let { newI, newJ } = getNextPos(i, j)

    if (board[i][j] !== '.') {
        dfs(board, newI, newJ, row, col, box, result)
        return
    }
    for (let val = 1; val < 10; val++) {
        if (!row[i][val - 1] && !col[j][val - 1] && !box[boxIndex][val - 1]) {
            row[i][val - 1] = true
            col[j][val - 1] = true
            box[boxIndex][val - 1] = true
            board[i][j] = `${val}`
            dfs(board, newI, newJ, row, col, box, result)
            if (result.done) {
                return
            }
            row[i][val - 1] = false
            col[j][val - 1] = false
            box[boxIndex][val - 1] = false
            board[i][j] = '.'
        }
    }
}

var scan = function(board, i, j, row, col, box) {
    if (i === 9) {
        return
    }
    let { newI, newJ } = getNextPos(i, j)
    if (board[i][j] !== '.') {
        let boxIndex = getBoxIndex(i, j)
        let val = Number(board[i][j])
        row[i][val - 1] = true
        col[j][val - 1] = true
        box[boxIndex][val - 1] = true
    }
    scan(board, newI, newJ, row, col, box)
}

var getBoxIndex = function(i, j) {
    const index = Math.floor(i / 3) * 3 + Math.floor(j / 3)
    return index
}

var getNextPos = function(i, j) {
    let newI = i
    let newJ = j + 1
    if (newJ > 8) {
        newI = i + 1
        newJ = 0
    }
    return { newI, newJ }
}

module.exports = solveSudoku
// runtime 98%
// memory 65%
