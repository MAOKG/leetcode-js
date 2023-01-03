/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length === 1) {
        return nums
    }
    let i = 0
    let j = 1
    while (j < nums.length) {
        if (nums[i] === 0) {
            if (nums[j] === 0) {
                j++
            } else {
                swap(nums, i, j)
                i++
                j++
            }
        } else {
            i++, j++
        }
    }
}

var swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

module.exports = moveZeroes
// runtime: 26%
// memory: 61%
