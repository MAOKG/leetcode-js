const containsNearbyDuplicate = require('./containsNearbyDuplicate')

test('test case 1', () => {
    var nums = [1, 2, 3, 1]
    var k = 3
    expect(containsNearbyDuplicate(nums, k)).toBe(true)
})

test('test case 2', () => {
    var nums = [1, 0, 1, 1]
    var k = 1
    expect(containsNearbyDuplicate(nums, k)).toBe(true)
})

test('test case 3', () => {
    var nums = [1, 2, 3, 1, 2, 3]
    var k = 2
    expect(containsNearbyDuplicate(nums, k)).toBe(false)
})
