const solve = require('./totalNQueens')

test('test case 1', () => {
    const n = 4
    const output = 2
    const result = solve(n)
    expect(result).toEqual(output)
})

test('test case 2', () => {
    const n = 1
    const output = 1
    const result = solve(n)
    expect(result).toEqual(output)
})
