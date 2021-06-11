/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    const canArr = candidates.filter(ele => ele <= target)
    const counts = {}
    for (let ele of canArr) {
        if (counts[ele]) {
            counts[ele]++
        } else {
            counts[ele] = 1
        }
    }
    const results = []

    findComb(counts, target, [], results)
    return results
}

var findComb = function(counts, target, curr, results) {
    if (target === 0) {
        results.push([...curr])
        return
    }
    let keys = Object.keys(counts).filter(
        key =>
            key <= target && (curr.length === 0 || key >= curr[curr.length - 1])
    )

    for (let key of keys) {
        if (key > target) {
            return
        }
        if (counts[key] > 0) {
            counts[key]--
            curr.push(Number(key))
            findComb(counts, target - key, curr, results)
            counts[key]++
            curr.pop()
        }
    }
}

module.exports = combinationSum2
// runtime 36%
// memory 38%
