const pacificAtlantic = require('./pacificAtlantic')

test('test case 1', () => {
    const heights = [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4]
    ]
    const output = [
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0]
    ]

    const result = pacificAtlantic(heights)
    expect(result.sort()).toEqual(output.sort())
})

test('test case 2', () => {
    const heights = [
        [2, 1],
        [1, 2]
    ]

    const output = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ]

    const result = pacificAtlantic(heights)
    expect(result.sort()).toEqual(output.sort())
})
