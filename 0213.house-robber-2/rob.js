/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    if (n === 1) {
        return nums[n - 1]
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1])
    }
    const val1 = solve(nums, 0, n - 2)
    const val2 = solve(nums, 1, n - 1)

    return Math.max(val1, val2)
}

var solve = function(nums, start, end) {
    let prev = 0
    let curr = 0
    for (let i = end; i >= start; i--) {
        let temp = curr
        curr = Math.max(curr, prev + nums[i])
        prev = temp
    }

    return curr
}

module.exports = rob
// runtime 15%
// memory 94%
