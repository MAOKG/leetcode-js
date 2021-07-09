const uniquePaths = require('./uniquePaths')

test('test case 1', () => {
    const m = 3
    const n = 7
    const output = 28
    const result = uniquePaths(m, n)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const m = 3
    const n = 2
    const output = 3
    const result = uniquePaths(m, n)
    expect(result).toBe(output)
})

test('test case 3', () => {
    const m = 7
    const n = 3
    const output = 28
    const result = uniquePaths(m, n)
    expect(result).toBe(output)
})

test('test case 4', () => {
    const m = 3
    const n = 3
    const output = 6
    const result = uniquePaths(m, n)
    expect(result).toBe(output)
})
