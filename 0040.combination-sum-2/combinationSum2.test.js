const combinationSum2 = require('./combinationSum2')

test('test case 1', () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5]
    const target = 8

    const result = combinationSum2(candidates, target)
    const expected = [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6]
    ]

    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const candidates = [2, 5, 2, 1, 2]
    const target = 5

    const result = combinationSum2(candidates, target)
    const expected = [[1, 2, 2], [5]]

    expect(result).toEqual(expected)
})
