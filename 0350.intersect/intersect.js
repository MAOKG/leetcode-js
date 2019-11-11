/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map1 = {}
    const result = []
    for (let ele of nums1) {
        if (map1[ele]) {
            map1[ele]++
        } else {
            map1[ele] = 1
        }
    }
    for (let ele of nums2) {
        if (map1[ele] > 0) {
            result.push(ele)
            map1[ele]--
        }
    }
    return result
}

module.exports = intersect
// runtime 60ms 67%
// memory 36 MB 19%
