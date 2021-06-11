const combinationSum2 = require('../0040.combination-sum-2/combinationSum2')

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const results = []
    const curr = []
    findComb(k, n, 0, curr, results)
    return results
}

var findComb = function(k, n, last, curr, results) {
    if (curr.length === k) {
        if (n === 0) {
            results.push([...curr])
        }
        return
    }
    for (let i = last + 1; i < 10; i++) {
        if (i > n) {
            return
        }
        curr.push(i)
        findComb(k, n - i, i, curr, results)
        curr.pop()
    }
}

module.exports = combinationSum3
// runtime 83%
// memory 75%
