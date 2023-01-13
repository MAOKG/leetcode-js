/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const res = new Array(m + n)
    let i = m - 1,
        j = n - 1
    for (let k = m + n - 1; k >= 0; k--) {
        if (i >= 0 && j >= 0 && nums2[j] > nums1[i]) {
            nums1[k] = nums2[j--]
        } else if (i < 0) {
            nums1[k] = nums2[j--]
        } else {
            nums1[k] = nums1[i--]
        }
    }
}

module.exports = merge
// time: 67%
// memory: 80%
