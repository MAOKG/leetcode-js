/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let visited = {}
    while (n !== 1) {
        if (visited[n]) {
            return false
        }
        visited[n] = true
        n = sumOfSquares(n)
    }
    return true
}

/**
 * @param {number} n
 * @return {number}
 */
var sumOfSquares = function (n) {
    let sum = 0
    let currNum = n
    while (currNum > 0) {
        sum += Math.pow(currNum % 10, 2)
        currNum = Math.floor(currNum / 10)
    }
    return sum
}

module.exports = isHappy
// runtime: 83%
// memory: 100%
