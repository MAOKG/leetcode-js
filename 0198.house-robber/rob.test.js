const rob = require('./rob')

test('test case 1', () => {
    const nums = [1, 2, 3, 1]
    const output = 4
    const result = rob(nums)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const nums = [2, 7, 9, 3, 1]
    const output = 12
    const result = rob(nums)
    expect(result).toBe(output)
})
