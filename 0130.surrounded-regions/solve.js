/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let m = board.length
    let n = board[0].length
    const onBorder = new Array(m).fill(0).map(ele => new Array(n).fill(false))

    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (
                (x === 0 || x === m - 1 || y === 0 || y === n - 1) &&
                board[x][y] === 'O'
            ) {
                process(board, onBorder, x, y)
            }
        }
    }

    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (!onBorder[x][y] && board[x][y] === 'O') {
                board[x][y] = 'X'
            }
        }
    }
}

const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

var process = function(board, onBorder, x, y) {
    onBorder[x][y] = true

    for (let direction of directions) {
        let newX = x + direction[0]
        let newY = y + direction[1]
        if (
            withinBoard(board, newX, newY) &&
            board[newX][newY] === 'O' &&
            !onBorder[newX][newY]
        ) {
            process(board, onBorder, newX, newY)
        }
    }
}

var withinBoard = function(board, x, y) {
    let m = board.length
    let n = board[0].length
    if (x < 0 || x > m - 1) {
        return false
    }
    if (y < 0 || y > n - 1) {
        return false
    }

    return true
}

module.exports = solve
// runtime 78%
// memory 30%
