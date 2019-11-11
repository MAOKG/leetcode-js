const intersect = require('./intersect')

test('test case 1', () => {
    var nums1 = [1, 2, 2, 1]
    var nums2 = [2, 2]

    expect(intersect(nums1, nums2)).toEqual([2, 2])
})

test('test case 1', () => {
    var nums1 = [4, 9, 5]
    var nums2 = [9, 4, 9, 8, 4]

    expect(intersect(nums1, nums2)).toEqual([9, 4])
})
