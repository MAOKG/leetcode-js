/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const res = []

    for (let item of set1) {
        if (set2.has(item)) {
            res.push(item)
        }
    }

    return res
}

module.exports = intersection
// runtime 95%
// memory 52%
