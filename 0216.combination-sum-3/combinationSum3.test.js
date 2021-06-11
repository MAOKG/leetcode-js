const combinationSum3 = require('./combinationSum3')

test('test case 1', () => {
    const k = 3
    const n = 7
    const result = combinationSum3(k, n)
    const expected = [[1, 2, 4]]

    expect(result).toEqual(expected)
})

test('test case 2', () => {
    const k = 3
    const n = 9
    const result = combinationSum3(k, n)
    const expected = [
        [1, 2, 6],
        [1, 3, 5],
        [2, 3, 4]
    ]

    expect(result).toEqual(expected)
})

test('test case 3', () => {
    const k = 4
    const n = 1
    const result = combinationSum3(k, n)
    const expected = []

    expect(result).toEqual(expected)
})

test('test case 4', () => {
    const k = 3
    const n = 2
    const result = combinationSum3(k, n)
    const expected = []

    expect(result).toEqual(expected)
})

test('test case 5', () => {
    const k = 9
    const n = 45
    const result = combinationSum3(k, n)
    const expected = [[1, 2, 3, 4, 5, 6, 7, 8, 9]]

    expect(result).toEqual(expected)
})
