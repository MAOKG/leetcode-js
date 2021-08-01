/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const memo = new Array(target + 1).fill(0)
    memo[0] = 1
    for (let sum = 1; sum <= target; sum++) {
        for (let num of nums) {
            if (sum >= num) {
                memo[sum] += memo[sum - num]
            }
        }
    }

    return memo[target]
}

module.exports = combinationSum4
// runtime 60%
// memory 33%
