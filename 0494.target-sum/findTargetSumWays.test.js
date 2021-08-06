const findTargetSumWays = require('./findTargetSumWays')

test('test case 1', () => {
    const nums = [1, 1, 1, 1, 1]
    const target = 3
    const output = 5
    expect(findTargetSumWays(nums, target)).toBe(output)
})

test('test case 2', () => {
    const nums = [1]
    const target = 1
    const output = 1
    expect(findTargetSumWays(nums, target)).toBe(output)
})
