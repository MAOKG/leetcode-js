const isMatch = require('./isMatch')

test('test case 1', () => {
    const s = 'aa'
    const p = 'a'
    const output = false
    const res = isMatch(s, p)
    expect(res).toBe(output)
})

test('test case 2', () => {
    const s = 'aa'
    const p = 'a*'
    const output = true
    const res = isMatch(s, p)
    expect(res).toBe(output)
})

test('test case 3', () => {
    const s = 'ab'
    const p = '.*'
    const output = true
    const res = isMatch(s, p)
    expect(res).toBe(output)
})

test('test case 4', () => {
    const s = 'aab'
    const p = 'c*a*b'
    const output = true
    const res = isMatch(s, p)
    expect(res).toBe(output)
})

test('test case 5', () => {
    const s = 'mississippi'
    const p = 'mis*is*p*.'
    const output = false
    const res = isMatch(s, p)
    expect(res).toBe(output)
})
