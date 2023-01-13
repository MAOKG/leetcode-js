/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsOnePass = function (nums) {
    let zero = -1
    let two = nums.length
    let i = 0

    while (i < two) {
        if (nums[i] === 0) {
            zero++
            swap(nums, i, zero)
            i++
        } else if (nums[i] === 2) {
            two--
            swap(nums, i, two)
        } else {
            i++
        }
    }
}

var swap = function (nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

module.exports = sortColorsOnePass
// time: 53%
// memory: 80%
