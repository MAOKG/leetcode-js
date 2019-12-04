const evalRPN = require('./evalRPN')

test('test case 1', () => {
    var input = ['2', '1', '+', '3', '*']
    expect(evalRPN(input)).toBe(9)
})

test('test case 2', () => {
    var input = ['4', '13', '5', '/', '+']
    expect(evalRPN(input)).toBe(6)
})

test('test case 3', () => {
    var input = [
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+'
    ]
    expect(evalRPN(input)).toBe(22)
})
