/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let n = nums.length
    if (n === 0) {
        return 0
    }
    let minLen = n + 1
    let currSum = nums[0]
    let l = 0
    let r = 0
    while (l <= r) {
        if (currSum >= s) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1
            }
            currSum -= nums[l++]
        } else {
            if (r === n - 1) {
                break
            }
            currSum += nums[++r]
        }
    }
    if (minLen === n + 1) {
        return 0
    }
    return minLen
}

module.exports = minSubArrayLen
// runtime 52ms 89%
// memory 35 MB 50%
