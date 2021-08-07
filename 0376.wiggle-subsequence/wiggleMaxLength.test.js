const wiggleMaxLength = require('./wiggleMaxLength')

test('test case 1', () => {
    const nums = [1, 7, 4, 9, 2, 5]
    const output = 6
    const result = wiggleMaxLength(nums)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
    const output = 7
    const result = wiggleMaxLength(nums)
    expect(result).toBe(output)
})

test('test case 3', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const output = 2
    const result = wiggleMaxLength(nums)
    expect(result).toBe(output)
})
