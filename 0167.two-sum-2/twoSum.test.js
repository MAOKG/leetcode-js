const twoSum = require('./twoSum')

test('test case 1', () => {
    var numbers = [2, 7, 11, 15]
    var target = 9
    result = twoSum(numbers, target)

    expect(result).toEqual([1, 2])
})
