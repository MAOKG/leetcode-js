const exist = require('./exist')

test('test case 1', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
    const word = 'ABCCED'
    const result = exist(board, word)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
    const word = 'SEE'
    const result = exist(board, word)
    expect(result).toBe(true)
})

test('test case 3', () => {
    const board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ]
    const word = 'ABCB'
    const result = exist(board, word)
    expect(result).toBe(false)
})
