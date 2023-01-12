/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const res = new Array(m + n)
    let i = 0,
        j = 0
    for (let k = 0; k < m + n; k++) {
        if (i < m && j < n && nums1[i] < nums2[j]) {
            res[k] = nums1[i++]
        } else if (j < n) {
            res[k] = nums2[j++]
        } else {
            res[k] = nums1[i++]
        }
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = res[i]
    }
}

module.exports = merge
// time: 84%
// memory: 94%
