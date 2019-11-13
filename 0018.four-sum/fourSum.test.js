const fourSum = require('./fourSum')

test('test case 1', () => {
    var nums = [1, 0, -1, 0, -2, 2]
    var target = 0

    expect(fourSum(nums, target)).toEqual([
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1]
    ])
})
