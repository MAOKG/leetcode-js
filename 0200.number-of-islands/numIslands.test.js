const numIsland = require('./numIslands')

test('test case 1', () => {
    const grid = [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
    ]
    const output = 1
    const result = numIsland(grid)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const grid = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
    ]
    const output = 3
    const result = numIsland(grid)
    expect(result).toBe(output)
})
