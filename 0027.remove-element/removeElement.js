/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0
    let n = nums.length
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1]
            // reduce array length by 1
            n--
        } else {
            i++
        }
    }
    return n
}

module.exports = removeElement
// time: 94%
// space: 33%
