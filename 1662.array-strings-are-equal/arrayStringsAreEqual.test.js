const arrayStringsAreEqual = require('./arrayStringsAreEqual')

test('test case 1', () => {
    const word1 = ['ab', 'c']
    const word2 = ['a', 'bc']
    const result = arrayStringsAreEqual(word1, word2)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const word1 = ['a', 'cb']
    const word2 = ['ab', 'c']
    const result = arrayStringsAreEqual(word1, word2)
    expect(result).toBe(false)
})

test('test case 3', () => {
    const word1 = ['abc', 'd', 'defg']
    const word2 = ['abcddefg']
    const result = arrayStringsAreEqual(word1, word2)
    expect(result).toBe(true)
})
