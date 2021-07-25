const canPartition = require('./canPartition')

test('test case 1', () => {
    const nums = [1, 5, 11, 5]
    const result = canPartition(nums)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const nums = [1, 2, 3, 5]
    const result = canPartition(nums)
    expect(result).toBe(false)
})

test('test case 3', () => {
    const nums = [100, 100, 100, 100, 100, 100, 100, 100]
    const result = canPartition(nums)
    expect(result).toBe(true)
})
