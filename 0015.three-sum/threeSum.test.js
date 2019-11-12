const threeSum = require('./threeSum')

test('test case 1', () => {
    var nums = [-1, 0, 1, 2, -1, -4]

    expect(threeSum(nums)).toEqual([[-1, -1, 2], [-1, 0, 1]])
})

test('test case 2', () => {
    var nums = [-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3]

    expect(threeSum(nums)).toEqual([
        [-5, 1, 4],
        [-5, 2, 3],
        [-3, -1, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -2, 4],
        [-2, -1, 3],
        [-2, 0, 2],
        [-2, 1, 1],
        [-1, -1, 2],
        [-1, 0, 1]
    ])
})
