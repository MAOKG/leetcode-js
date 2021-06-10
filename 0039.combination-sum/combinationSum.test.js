const combinationSum = require('./combinationSum')

test('test case 1', () => {
    const candidates = [2, 3, 6, 7]
    const target = 7

    const result = combinationSum(candidates, target)
    const expected = [[2, 2, 3], [7]]

    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const candidates = [2, 3, 5]
    const target = 8

    const result = combinationSum(candidates, target)
    const expected = [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
    ]

    expect(result).toEqual(expected)
})

test('test case 3', () => {
    const candidates = [2]
    const target = 1

    const result = combinationSum(candidates, target)
    const expected = []

    expect(result).toEqual(expected)
})

test('test case 4', () => {
    const candidates = [1]
    const target = 1

    const result = combinationSum(candidates, target)
    const expected = [[1]]

    expect(result).toEqual(expected)
})

test('test case 5', () => {
    const candidates = [1]
    const target = 2

    const result = combinationSum(candidates, target)
    const expected = [[1, 1]]

    expect(result).toEqual(expected)
})

test('test case 6', () => {
    const candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4]
    const target = 15

    const result = combinationSum(candidates, target)
    const expected = [
        [3, 3, 3, 3, 3],
        [3, 3, 3, 6],
        [3, 3, 4, 5],
        [3, 3, 9],
        [3, 4, 4, 4],
        [3, 4, 8],
        [3, 5, 7],
        [3, 6, 6],
        [3, 12],
        [4, 4, 7],
        [4, 5, 6],
        [4, 11],
        [5, 5, 5],
        [6, 9],
        [7, 8]
    ]

    expect(result).toEqual(expected)
})
