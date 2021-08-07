const lengthOfLIS = require('./lengthOfLIS')

test('test case 1', () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18]
    const output = 4
    const res = lengthOfLIS(nums)
    expect(res).toBe(output)
})

test('test case 2', () => {
    const nums = [0, 1, 0, 3, 2, 3]
    const output = 4
    const res = lengthOfLIS(nums)
    expect(res).toBe(output)
})

test('test case 3', () => {
    const nums = [7, 7, 7, 7, 7, 7, 7]
    const output = 1
    const res = lengthOfLIS(nums)
    expect(res).toBe(output)
})
