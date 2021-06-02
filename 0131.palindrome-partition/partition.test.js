const partition = require('./partition')

test('test case 1', () => {
    const s = 'aab'
    const expected = [
        ['a', 'a', 'b'],
        ['aa', 'b']
    ]
    const result = partition(s)
    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const s = 'a'
    const expected = [['a']]
    const result = partition(s)
    expect(result).toEqual(expected)
})
