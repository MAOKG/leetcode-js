/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    if (n === 0) {
        return 0
    }
    const memo = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && memo[i] < 1 + memo[j]) {
                memo[i] = 1 + memo[j]
            }
        }
    }
    let res = 1
    for (let i = 0; i < n; i++) {
        if (memo[i] > res) {
            res = memo[i]
        }
    }
    return res
}

module.exports = lengthOfLIS
// runtime 76%
// memory 44%
