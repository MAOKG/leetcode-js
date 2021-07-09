const uniquePathsWithObstacles = require('./uniquePaths')

test('test case 1', () => {
    const obstacleGrid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
    const output = 2
    const result = uniquePathsWithObstacles(obstacleGrid)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const obstacleGrid = [
        [0, 1],
        [0, 0]
    ]
    const output = 1
    const result = uniquePathsWithObstacles(obstacleGrid)
    expect(result).toBe(output)
})

test('test case 3', () => {
    const obstacleGrid = [[1]]
    const output = 0
    const result = uniquePathsWithObstacles(obstacleGrid)
    expect(result).toBe(output)
})
