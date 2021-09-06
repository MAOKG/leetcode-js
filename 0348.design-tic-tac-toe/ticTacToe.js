class TicTacToe {
    /**
     * Initialize your data structure here.
     * @param {number} n
     */
    constructor(n) {
        this.board = new Array(n).fill(0).map((ele) => new Array(n).fill(0))
        this.winner = 0
        this.n = n
    }
    /**
 * Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
    move(row, col, player) {
        if (this.winner !== 0) {
            return this.winner
        }
        this.board[row][col] = player
        const isWin =
            this.checkRow(row, player) ||
            this.checkCol(col, player) ||
            this.checkDiag1(row, col, player) ||
            this.checkDiag2(row, col, player)

        if (isWin) {
            this.winner = player
        }

        return this.winner
    }

    checkRow(row, player) {
        for (let i = 0; i < this.n; i++) {
            if (this.board[row][i] !== player) {
                return false
            }
        }
        return true
    }

    checkCol(col, player) {
        for (let i = 0; i < this.n; i++) {
            if (this.board[i][col] !== player) {
                return false
            }
        }
        return true
    }

    checkDiag1(row, col, player) {
        if (row !== col) {
            return false
        }
        for (let i = 0; i < this.n; i++) {
            if (this.board[i][i] !== player) {
                return false
            }
        }
        return true
    }

    checkDiag2(row, col, player) {
        if (row + col !== this.n - 1) {
            return false
        }
        for (let i = 0; i < this.n; i++) {
            if (this.board[i][this.n - 1 - i] !== player) {
                return false
            }
        }
        return true
    }
}
/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */

module.exports = TicTacToe
// runtime 25%
// memory 25%
