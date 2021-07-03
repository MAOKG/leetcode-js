const minPathSum = require('./minPathSum')

test('test case 1', () => {
    const grid = [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]
    const output = 7
    const result = minPathSum(grid)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const grid = [
        [1, 2, 3],
        [4, 5, 6]
    ]
    const output = 12
    const result = minPathSum(grid)
    expect(result).toBe(output)
})
