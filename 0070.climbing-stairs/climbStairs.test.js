const climb = require('./climbStairs')

test('test case 1', () => {
    const n = 2
    const output = 2
    const result = climb(n)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const n = 3
    const output = 3
    const result = climb(n)
    expect(result).toBe(output)
})
