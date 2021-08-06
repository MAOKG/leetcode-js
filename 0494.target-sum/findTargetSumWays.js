/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let memo = new Array(2001).fill(0)
    memo[1000 + nums[0]] += 1
    memo[1000 - nums[0]] += 1

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i]
        let temp = new Array(2001).fill(0)
        for (let j = 0; j < 2001; j++) {
            if (j - curr >= 0) {
                temp[j] += memo[j - curr]
            }
            if (j + curr <= 2000) {
                temp[j] += memo[j + curr]
            }
        }
        memo = temp
    }

    return memo[target + 1000]
}

module.exports = findTargetSumWays
// runtime 82%
// memory 45%
