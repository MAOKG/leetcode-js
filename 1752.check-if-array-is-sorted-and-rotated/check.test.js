const check = require('./check')

test('test case 1', () => {
    const nums = [3, 4, 5, 1, 2]
    const result = check(nums)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const nums = [2, 1, 3, 4]
    const result = check(nums)
    expect(result).toBe(false)
})

test('test case 3', () => {
    const nums = [1, 2, 3]
    const result = check(nums)
    expect(result).toBe(true)
})

test('test case 4', () => {
    const nums = [1, 1, 1]
    const result = check(nums)
    expect(result).toBe(true)
})

test('test case 5', () => {
    const nums = [2, 1]
    const result = check(nums)
    expect(result).toBe(true)
})
