/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b
    })
    let minDiff = Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum === target) {
                return target
            } else if (sum > target) {
                if (Math.abs(sum - target) < Math.abs(minDiff)) {
                    minDiff = sum - target
                }
                r--
            } else {
                if (Math.abs(sum - target) < Math.abs(minDiff)) {
                    minDiff = sum - target
                }
                l++
            }
        }
    }
    return minDiff + target
}
module.exports = threeSumClosest
// runtime 70%
// memory 100%
