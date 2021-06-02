const permute = require('./permute')

test('test case 1', () => {
    const nums = [1, 2, 3]
    const expected = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ]
    const result = permute(nums)
    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const nums = [0, 1]
    const expected = [
        [0, 1],
        [1, 0]
    ]
    const result = permute(nums)
    expect(result).toEqual(expected)
})

test('test case 3', () => {
    const nums = [1]
    const expected = [[1]]
    const result = permute(nums)
    expect(result).toEqual(expected)
})
