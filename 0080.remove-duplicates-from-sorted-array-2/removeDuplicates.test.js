const removeDuplicates = require('./removeDuplicates')

test('test case 1', () => {
    const nums = [1, 1, 1, 2, 2, 3]
    const k = removeDuplicates(nums)

    const expectedNums = [1, 1, 2, 2, 3]
    expect(k).toBe(expectedNums.length)
    expect(nums.slice(0, k)).toEqual(expectedNums)
})

test('test case 2', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    const k = removeDuplicates(nums)

    const expectedNums = [0, 0, 1, 1, 2, 3, 3]
    expect(k).toBe(expectedNums.length)
    expect(nums.slice(0, k)).toEqual(expectedNums)
})
