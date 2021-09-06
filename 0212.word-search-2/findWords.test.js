const findWords = require('./findWords')

test('test case 1', () => {
    const board = [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v'],
    ]
    const words = ['oath', 'pea', 'eat', 'rain']
    const output = ['eat', 'oath']
    const result = findWords(board, words)

    expect(result.sort()).toEqual(output.sort())
})

test('test case 2', () => {
    const board = [
        ['a', 'b'],
        ['c', 'd'],
    ]
    const words = ['abcb']
    const output = []
    const result = findWords(board, words)

    expect(result).toEqual(output)
})

test('test case 3', () => {
    const board = [['a', 'a']]
    const words = ['aaa']
    const output = []
    const result = findWords(board, words)

    expect(result).toEqual(output)
})
