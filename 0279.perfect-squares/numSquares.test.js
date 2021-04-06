const numSquares = require('./numSquares')

test('test case 1', () => {
    const n = 12
    const result = numSquares(n)
    expect(result).toBe(3)
})

test('test case 2', () => {
    const n = 13
    const result = numSquares(n)
    expect(result).toBe(2)
})
