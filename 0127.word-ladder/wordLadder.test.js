const wordLadder = require('./wordLadder')

test('test case 1', () => {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']

    const result = wordLadder(beginWord, endWord, wordList)
    expect(result).toBe(5)
})

test('test case 2', () => {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log']

    const result = wordLadder(beginWord, endWord, wordList)
    expect(result).toBe(0)
})

test('test case 3', () => {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'tog', 'cog']

    const result = wordLadder(beginWord, endWord, wordList)
    expect(result).toBe(0)
})
