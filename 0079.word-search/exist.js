/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length
    let n = board[0].length
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (
                board[i][j] === word[0] &&
                checkExist(board, i, j, 0, word, visited)
            ) {
                return true
            }
        }
    }

    return false
}

var checkExist = function(board, i, j, index, word, visited) {
    if (index === word.length - 1) {
        return board[i][j] === word[word.length - 1]
    }
    visited[i][j] = true
    for (let direction of directions) {
        let x = i + direction[0]
        let y = j + direction[1]
        if (onBoard(board, x, y) && !visited[x][y]) {
            if (
                board[x][y] === word[index + 1] &&
                checkExist(board, x, y, index + 1, word, visited)
            ) {
                return true
            }
        }
    }

    visited[i][j] = false

    return false
}

var onBoard = function(board, i, j) {
    let m = board.length
    let n = board[0].length
    return i >= 0 && i < m && j >= 0 && j < n
}

var directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

module.exports = exist
// runtime 86%
// memory 47%
