/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }
    nums.sort(function(a, b) {
        return a - b
    })
    const result = []
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            let sum = curr + nums[l] + nums[r]
            if (sum === 0) {
                result.push([curr, nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) {
                    l++
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--
                }
                l++
                r--
            } else if (sum > 0) {
                r--
            } else {
                l++
            }
        }
        while (i < nums.length && nums[i] === nums[i + 1]) {
            i++
        }
    }
    return result
}

module.exports = threeSum
// runtime 148ms 96%
// memory 47 MB 80%
