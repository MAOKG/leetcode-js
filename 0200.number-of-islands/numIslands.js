/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length
    let n = grid[0].length
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
    let count = 0
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] === '1' && !visited[x][y]) {
                count++
                dfs(grid, visited, x, y)
            }
        }
    }

    return count
}

const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

var dfs = function(grid, visited, x, y) {
    visited[x][y] = true
    for (let direction of directions) {
        let newX = x + direction[0]
        let newY = y + direction[1]

        if (
            insideGrid(grid, newX, newY) &&
            grid[newX][newY] === '1' &&
            !visited[newX][newY]
        ) {
            dfs(grid, visited, newX, newY)
        }
    }
}

var insideGrid = function(grid, x, y) {
    let m = grid.length
    let n = grid[0].length
    if (x < 0 || x >= m) {
        return false
    }
    if (y < 0 || y >= n) {
        return false
    }

    return true
}

module.exports = numIslands
// runtime 81%
// memory 32%
