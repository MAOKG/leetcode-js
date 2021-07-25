/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    if (sum % 2 === 1) {
        return false
    }
    const s = sum / 2
    const memo = new Array(s + 1).fill(false)

    for (let i = 0; i <= s; i++) {
        memo[i] = nums[0] === i
    }

    for (let i = 1; i < nums.length; i++) {
        for (let j = s; j >= nums[i]; j--) {
            memo[j] = memo[j] || memo[j - nums[i]]
        }
    }

    return memo[s]
}

module.exports = canPartition
// runtime 80%
// memory 88%
