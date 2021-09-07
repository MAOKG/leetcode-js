const findCircleNum = require('./findCircleNum')

test('test case 1', () => {
    const isConnected = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ]
    const output = 2
    const res = findCircleNum(isConnected)
    expect(res).toBe(output)
})

test('test case 2', () => {
    const isConnected = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ]
    const output = 3
    const res = findCircleNum(isConnected)
    expect(res).toBe(output)
})
