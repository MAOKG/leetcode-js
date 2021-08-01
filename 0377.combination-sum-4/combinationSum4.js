/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let count = 0
    if (target === 0) {
        return 1
    }
    for (let num of nums) {
        if (target >= num) {
            count += combinationSum4(nums, target - num)
        }
    }
    return count
}

module.exports = combinationSum4
