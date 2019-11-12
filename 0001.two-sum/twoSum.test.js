const twoSum = require('./twoSum')

test('test case 1', () => {
    var nums = [2, 7, 11, 15]
    var target = 9

    expect(twoSum(nums, target)).toEqual([0, 1])
})
