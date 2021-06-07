const combine = require('./combination')

test('test case 1', () => {
    const n = 4
    const k = 2
    const results = combine(n, k)
    const expected = [
        [2, 4],
        [3, 4],
        [2, 3],
        [1, 2],
        [1, 3],
        [1, 4]
    ]

    expect(results.sort()).toEqual(expected.sort())
})

test('test case 2', () => {
    const n = 1
    const k = 1
    const results = combine(n, k)
    const expected = [[1]]

    expect(results.sort()).toEqual(expected.sort())
})
