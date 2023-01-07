/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        if (nums[j] === val) {
            j--
        } else if (nums[i] == val) {
            swap(nums, i, j)
            i++
            j--
        } else {
            i++
        }
    }
    return i
}

var swap = function (nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

module.exports = removeElement
// time: 58%
// space: 98%
