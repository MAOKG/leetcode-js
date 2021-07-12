/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    const memo = new Array(n).fill(-1)
    memo[n - 1] = nums[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        let val1 = memo[i + 1]
        let val2 = nums[i]
        if (i + 2 < n) {
            val2 += memo[i + 2]
        }
        memo[i] = Math.max(val1, val2)
    }

    return memo[0]
}

module.exports = rob
// runtime 83%
// memory 27%
