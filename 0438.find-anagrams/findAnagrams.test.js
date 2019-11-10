const findAnagrams = require('./findAnagrams')

test('test case 1', () => {
    var s = 'cbaebabacd'
    var p = 'abc'

    var result = findAnagrams(s, p)

    expect(result).toEqual([0, 6])
})

test('test case 2', () => {
    var s = 'abab'
    var p = 'ab'

    var result = findAnagrams(s, p)

    expect(result).toEqual([0, 1, 2])
})

test('test case 3', () => {
    var s = 'baa'
    var p = 'aa'

    var result = findAnagrams(s, p)

    expect(result).toEqual([1])
})
