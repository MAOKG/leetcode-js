const combinationSum4 = require('./combinationSum4')

test('test case 1', () => {
    const nums = [1, 2, 3]
    const target = 4
    const output = 7
    const result = combinationSum4(nums, target)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const nums = [9]
    const target = 3
    const output = 0
    const result = combinationSum4(nums, target)
    expect(result).toBe(output)
})
