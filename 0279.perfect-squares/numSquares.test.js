const numSquares = require('./numSquares')
const numSquares2 = require('./numSquaresDP')

test('test case 1', () => {
    const n = 12
    const result1 = numSquares(n)
    const result2 = numSquares2(n)
    expect(result1).toBe(3)
    expect(result2).toBe(3)
})

test('test case 2', () => {
    const n = 13
    const result1 = numSquares(n)
    const result2 = numSquares2(n)
    expect(result1).toBe(2)
    expect(result2).toBe(2)
})
