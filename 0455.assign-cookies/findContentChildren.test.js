const findContentChildren = require('./findContentChildren')

test('test case 1', () => {
    const g = [1, 2, 3]
    const s = [1, 1]
    const output = 1
    const result = findContentChildren(g, s)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const g = [1, 2]
    const s = [1, 2, 3]
    const output = 2
    const result = findContentChildren(g, s)
    expect(result).toBe(output)
})
