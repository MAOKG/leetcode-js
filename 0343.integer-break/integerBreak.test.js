const integerBreak = require('./integerBreak')

test('test case 1', () => {
    const n = 2
    const output = 1
    const result = integerBreak(n)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const n = 10
    const output = 36
    const result = integerBreak(n)
    expect(result).toBe(output)
})
