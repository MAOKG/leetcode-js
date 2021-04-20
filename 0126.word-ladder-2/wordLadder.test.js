const wordLadder = require('./wordLadder')

test('test case 1', () => {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']

    const result = wordLadder(beginWord, endWord, wordList)
    expect(result).toEqual([
        ['hit', 'hot', 'dot', 'dog', 'cog'],
        ['hit', 'hot', 'lot', 'log', 'cog']
    ])
})

test('test case 2', () => {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log']

    const result = wordLadder(beginWord, endWord, wordList)
    expect(result).toEqual([])
})

test('test case 3', () => {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'tog', 'cog']

    const result = wordLadder(beginWord, endWord, wordList)
    expect(result).toEqual([])
})
test('test case 3', () => {
    const beginWord = 'a'
    const endWord = 'c'
    const wordList = ['a', 'b', 'c']

    const result = wordLadder(beginWord, endWord, wordList)
    expect(result).toEqual([['a', 'c']])
})
