const solve = require('./solve')

test('test case 1', () => {
    const board = [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X']
    ]
    const output = [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X']
    ]
    solve(board)
    expect(board).toEqual(output)
})

test('test case 2', () => {
    const board = [['X']]
    const output = [['X']]
    solve(board)
    expect(board).toEqual(output)
})
