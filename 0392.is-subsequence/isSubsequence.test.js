const isSubsequence = require('./isSubsequence')

test('test case 1', () => {
    const s = 'abc'
    const t = 'ahbgdc'
    const result = isSubsequence(s, t)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const s = 'axc'
    const t = 'ahbgdc'
    const result = isSubsequence(s, t)
    expect(result).toBe(false)
})
