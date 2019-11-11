const isHappy = require('./isHappy')

test('test case 1', () => {
    var input = 19
    expect(isHappy(input)).toBe(true)
})

test('test case 2', () => {
    var input = 7
    expect(isHappy(input)).toBe(true)
})
