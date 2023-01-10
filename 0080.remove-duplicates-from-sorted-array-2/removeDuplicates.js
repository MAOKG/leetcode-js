/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0
    let j = 1
    let isTwice = false

    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            if (isTwice) {
                j++
            } else {
                nums[i + 1] = nums[j]
                isTwice = true
                i++
                j++
            }
        } else if (nums[i] < nums[j]) {
            nums[i + 1] = nums[j]
            isTwice = false
            i++, j++
        } else {
            break
        }
    }

    return i + 1
}

module.exports = removeDuplicates
// time: 88%
// memory: 56%
