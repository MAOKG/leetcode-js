import containsNearbyAlmostDuplicate from './containsNearbyAlmostDuplicate'

test('test case 1', () => {
    const nums = [1, 2, 3, 1],
        indexDiff = 3,
        valueDiff = 0
    const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const nums = [1, 5, 9, 1, 5, 9],
        indexDiff = 2,
        valueDiff = 3
    const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)
    expect(result).toBe(false)
})

test.only('test case 3', () => {
    const nums = [-1, 2],
        indexDiff = 2,
        valueDiff = 3
    const result = containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)
    expect(result).toBe(true)
})
