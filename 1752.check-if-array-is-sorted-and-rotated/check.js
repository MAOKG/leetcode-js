/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let breakCount = 0
    let prev = 0
    for (let num of nums) {
        if (num < prev) {
            breakCount++
            if (breakCount > 1) {
                return false
            }
        }
        prev = num
    }
    if (breakCount === 0) {
        return true
    }

    return nums[nums.length - 1] <= nums[0]
}

module.exports = check
// runtime 90%
// memory 54%
