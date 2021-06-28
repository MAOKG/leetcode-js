/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let m = heights.length
    let n = heights[0].length
    const pacificMap = new Array(m).fill(0).map(ele => new Array(n).fill(false))
    const atlanticMap = new Array(m)
        .fill(0)
        .map(ele => new Array(n).fill(false))
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (x === 0 || y === 0) {
                dfs(heights, pacificMap, x, y)
            }
            if (x === m - 1 || y === n - 1) {
                dfs(heights, atlanticMap, x, y)
            }
        }
    }
    const results = []
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (pacificMap[x][y] && atlanticMap[x][y]) {
                results.push([x, y])
            }
        }
    }

    return results
}

const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

var dfs = function(heights, map, x, y) {
    map[x][y] = true
    for (let direction of directions) {
        let newX = x + direction[0]
        let newY = y + direction[1]
        if (
            onBoard(heights, newX, newY) &&
            heights[x][y] <= heights[newX][newY] &&
            !map[newX][newY]
        ) {
            dfs(heights, map, newX, newY)
        }
    }
}

var onBoard = function(heights, x, y) {
    let m = heights.length
    let n = heights[0].length
    if (x < 0 || x > m - 1) {
        return false
    }
    if (y < 0 || y > n - 1) {
        return false
    }

    return true
}

module.exports = pacificAtlantic
// runtime 49%
// memory 63%
