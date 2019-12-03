const isValid = require('./isValid')

test('test case 1', () => {
    var input = '()'
    expect(isValid(input)).toBe(true)
})

test('test case 2', () => {
    var input = '()[]{}'
    expect(isValid(input)).toBe(true)
})

test('test case 3', () => {
    var input = '(]'
    expect(isValid(input)).toBe(false)
})

test('test case 4', () => {
    var input = '([)]'
    expect(isValid(input)).toBe(false)
})

test('test case 5', () => {
    var input = '{[]}'
    expect(isValid(input)).toBe(true)
})
