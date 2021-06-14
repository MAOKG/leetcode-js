const subsetsWithDup = require('./subsetsWithDup')

test('test case 1', () => {
    const nums = [1, 2, 2]
    const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
    const result = subsetsWithDup(nums)

    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const nums = [0]
    const expected = [[], [0]]
    const result = subsetsWithDup(nums)

    expect(result).toEqual(expected)
})
