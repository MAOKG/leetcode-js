/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map1 = {}
    const resultSet = new Set()
    for (let ele of nums1) {
        if (!map1[ele]) {
            map1[ele] = true
        }
    }
    for (let ele of nums2) {
        if (map1[ele]) {
            resultSet.add(ele)
        }
    }

    return Array.from(resultSet)
}

module.exports = intersection
// runtime 60ms 57%
// memory 36 MB 8%
