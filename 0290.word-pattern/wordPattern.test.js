const wordPattern = require('./wordPattern')

test('test case 1', () => {
    var pattern = 'abba'
    var str = 'dog cat cat dog'

    expect(wordPattern(pattern, str)).toBe(true)
})

test('test case 2', () => {
    var pattern = 'abba'
    var str = 'dog cat cat fish'

    expect(wordPattern(pattern, str)).toBe(false)
})

test('test case 3', () => {
    var pattern = 'aaaa'
    var str = 'dog cat cat dog'

    expect(wordPattern(pattern, str)).toBe(false)
})

test('test case 4', () => {
    var pattern = 'abba'
    var str = 'dog dog dog dog'

    expect(wordPattern(pattern, str)).toBe(false)
})

test('test case 5', () => {
    var pattern = 'ab'
    var str = 'dog dog'

    expect(wordPattern(pattern, str)).toBe(false)
})
