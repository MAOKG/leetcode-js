/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const start = 1
    const results = []
    const curr = []
    findComb(start, n, k, curr, results)
    return results
}

var findComb = function(start, n, k, curr, results) {
    if (curr.length === k) {
        results.push([...curr])
        return
    }

    for (let i = start; n - i + 1 + curr.length >= k; i++) {
        curr.push(i)
        findComb(i + 1, n, k, curr, results)
        curr.pop()
    }
}

module.exports = combine
// runtime 98%
// memory 53%
