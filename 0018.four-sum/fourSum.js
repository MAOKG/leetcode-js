/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) {
        return []
    }
    const result = []
    nums.sort(function(a, b) {
        return a - b
    })
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]
        if (i + 1 < nums.length) {
            for (let j = i + 1; j < nums.length; j++) {
                let y = nums[j]
                let l = j + 1
                let r = nums.length - 1
                while (l < r) {
                    let sum = x + y + nums[l] + nums[r]
                    if (sum === target) {
                        result.push([x, y, nums[l], nums[r]])
                        while (l < r && nums[l] === nums[l + 1]) {
                            l++
                        }
                        while (l < r && nums[r] === nums[r - 1]) {
                            r--
                        }
                        l++
                        r--
                    } else if (sum > target) {
                        r--
                    } else {
                        l++
                    }
                }
                while (j < nums.length && nums[j] === nums[j + 1]) {
                    j++
                }
            }
        }
        while (i < nums.length && nums[i] === nums[i + 1]) {
            i++
        }
    }
    return result
}

module.exports = fourSum
// runtime 92ms 74%
// memory 36MB 100%
