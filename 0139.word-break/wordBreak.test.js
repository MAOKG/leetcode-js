const wordBreak = require('./wordBreak')

test('test case 1', () => {
    const s = 'leetcode'
    const wordDict = ['leet', 'code']
    const output = true
    const result = wordBreak(s, wordDict)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const s = 'applepenapple'
    const wordDict = ['apple', 'pen']
    const output = true
    const result = wordBreak(s, wordDict)
    expect(result).toBe(output)
})

test('test case 3', () => {
    const s = 'catsandog'
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat']
    const output = false
    const result = wordBreak(s, wordDict)
    expect(result).toBe(output)
})
