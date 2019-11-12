const isIsomorphic = require('./isIsomorphic')

test('test case 1', () => {
    var s = 'egg'
    var t = 'add'

    expect(isIsomorphic(s, t)).toBe(true)
})

test('test case 2', () => {
    var s = 'foo'
    var t = 'bar'

    expect(isIsomorphic(s, t)).toBe(false)
})

test('test case 3', () => {
    var s = 'paper'
    var t = 'title'

    expect(isIsomorphic(s, t)).toBe(true)
})
