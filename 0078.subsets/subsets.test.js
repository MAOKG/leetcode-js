const subsets = require('./subsets')

test('test case 1', () => {
    const nums = [1, 2, 3]
    const result = subsets(nums)
    const expected = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

    expect(result.sort()).toEqual(expected.sort())
})

test('test case 2', () => {
    const nums = [0]
    const result = subsets(nums)
    const expected = [[], [0]]

    expect(result.sort()).toEqual(expected.sort())
})
