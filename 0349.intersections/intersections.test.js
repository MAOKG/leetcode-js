const intersection = require('./intersections')

test('test case 1', () => {
    var nums1 = [1, 2, 2, 1]
    var nums2 = [2, 2]

    const result = intersection(nums1, nums2)
    result.sort((a, b) => a - b)
    expect(result).toEqual([2])
})

test('test case 2', () => {
    var nums1 = [4, 9, 5]
    var nums2 = [9, 4, 9, 8, 4]
    const result = intersection(nums1, nums2)
    result.sort((a, b) => a - b)
    expect(result).toEqual([4, 9])
})
