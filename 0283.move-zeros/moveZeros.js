/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let k = 0 // [0, k) are all non-zero elements

    /**
     * iterate through nums, such that:
     *  [0, k) are non-zero elements in order, and
     *  [k, i] are zeros
     */
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i != k) {
                swap(nums, i, k)
            }
            k++
        }
    }
}

var swap = function (arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

module.exports = moveZeroes
// runtime: 75%
// memory: 78%
