const findKthLargest = require('./findKthLargest')

test('test case 1', () => {
    const nums = [3, 2, 1, 5, 6, 4]
    const k = 2

    const result = findKthLargest(nums, k)
    const expected = 5

    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    const k = 4

    const result = findKthLargest(nums, k)
    const expected = 4

    expect(result).toEqual(expected)
})
