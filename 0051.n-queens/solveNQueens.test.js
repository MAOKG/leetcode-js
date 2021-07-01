const solve = require('./solveNQueens')

test('test case 1', () => {
    const n = 4
    const output = [
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..']
    ]
    const result = solve(n)
    expect(result).toEqual(output)
})

test('test case 2', () => {
    const n = 1
    const output = [['Q']]
    const result = solve(n)
    expect(result).toEqual(output)
})
