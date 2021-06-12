/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort()
    const results = [[]]
    const curr = []
    findSubsets(nums, 0, curr, results)
    return results
}

var findSubsets = function(nums, index, curr, results) {
    if (index === nums.length) {
        return
    }

    for (let i = index; i < nums.length; i++) {
        let num = nums[i]
        curr.push(num)
        results.push([...curr])
        findSubsets(nums, i + 1, curr, results)
        curr.pop()
    }
}

module.exports = subsets
// runtime 84%
// memory 86%
