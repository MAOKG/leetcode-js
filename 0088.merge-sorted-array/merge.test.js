import merge from './merge'

test('test 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0],
        m = 3,
        nums2 = [2, 5, 6],
        n = 3
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})

test('test 2', () => {
    const nums1 = [1],
        m = 1,
        nums2 = [],
        n = 0
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1])
})

test('test 3', () => {
    const nums1 = [0],
        m = 0,
        nums2 = [1],
        n = 1
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1])
})
