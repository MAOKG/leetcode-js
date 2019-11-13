const threeSumClosest = require('./threeSumClosest')

test('test case 1', () => {
    var nums = [-1, 2, 1, -4]
    var target = 1

    expect(threeSumClosest(nums, target)).toBe(2)
})
