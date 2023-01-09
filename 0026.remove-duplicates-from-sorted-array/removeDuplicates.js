/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0
    let j = 1

    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++
        } else if (nums[i] < nums[j]) {
            nums[i + 1] = nums[j]
            i++
            j++
        } else {
            break
        }
    }

    return i + 1
}

module.exports = removeDuplicates
// time: 96%
// memory: 43%
