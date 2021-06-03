/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 1) {
        return [nums]
    }
    const counts = {}
    for (let num of nums) {
        if (counts[num]) {
            counts[num]++
        } else {
            counts[num] = 1
        }
    }
    const results = []
    getPermutes(nums, [], counts, results)
    return results
}

var getPermutes = function(nums, curr, counts, results) {
    if (curr.length === nums.length) {
        results.push(curr)
        return
    }

    for (let key of Object.keys(counts)) {
        let count = counts[key]
        if (count > 0) {
            counts[key] = count - 1
            getPermutes(nums, [...curr, Number(key)], counts, results)
            counts[key] = count
        }
    }
}

module.exports = permuteUnique
// runtime 81%
// memory 30%
