const minimumTotal = require('./minimumTotal')

test('test case 1', () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
    const output = 11
    const result = minimumTotal(triangle)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const triangle = [[-10]]
    const output = -10
    const result = minimumTotal(triangle)
    expect(result).toBe(output)
})
