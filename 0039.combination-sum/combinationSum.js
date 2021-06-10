/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const arr = candidates.filter(val => val <= target)
    arr.sort((a, b) => a - b)
    const results = []
    findComb(arr, 0, [], target, results)
    return results
}

var findComb = function(candidates, index, curr, target, results) {
    if (target === 0) {
        results.push([...curr])
        return
    }
    for (let i = index; i < candidates.length; i++) {
        let val = candidates[i]
        if (val > target) {
            return
        }
        curr.push(val)
        findComb(candidates, i, curr, target - val, results)
        curr.pop()
    }
}

module.exports = combinationSum
// runtime 67%
// memory 55%
