/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const memo = new Array(nums.length).fill(0).map(ele => new Map())
    return getCount(nums, target, 0, memo)
}

var getCount = function(nums, target, index, memo) {
    if (index >= nums.length) {
        return target === 0 ? 1 : 0
    }
    if (memo[index].has(target)) {
        return memo[index].get(target)
    }
    const count =
        getCount(nums, target - nums[index], index + 1, memo) +
        getCount(nums, target + nums[index], index + 1, memo)
    memo[index].set(target, count)

    return count
}

module.exports = findTargetSumWays
// runtime 82%
// memory 45%
