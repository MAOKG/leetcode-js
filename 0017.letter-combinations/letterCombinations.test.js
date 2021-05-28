const letterCombinations = require('./letterCombinations')

test('tese case 1', () => {
    const digits = '23'
    const results = letterCombinations(digits)
    const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    expect(results.sort()).toEqual(expected.sort())
})

test('tese case 2', () => {
    const digits = ''
    const results = letterCombinations(digits)
    const expected = []
    expect(results.sort()).toEqual(expected.sort())
})

test('tese case 3', () => {
    const digits = '2'
    const results = letterCombinations(digits)
    const expected = ['a', 'b', 'c']
    expect(results.sort()).toEqual(expected.sort())
})
