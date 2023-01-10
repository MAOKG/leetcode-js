const removeElement = require('./removeElement')

test('test case 1', () => {
    const nums = [3, 2, 2, 3]
    const val = 3
    const k = removeElement(nums, val)

    expect(k).toBe(2)
    const firstKNums = nums.slice(0, k).sort()
    const expectedNums = [2, 2]
    expect(firstKNums).toEqual(expectedNums)
})

test('test case 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2
    const k = removeElement(nums, val)

    expect(k).toBe(5)
    const firstKNums = nums.slice(0, k).sort()
    const expectedNums = [0, 0, 1, 3, 4]
    expect(firstKNums).toEqual(expectedNums)
})

test('test case 3', () => {
    const nums = [2]
    const val = 2
    const k = removeElement(nums, val)

    expect(k).toBe(0)
    const firstKNums = nums.slice(0, k).sort()
    const expectedNums = []
    expect(firstKNums).toEqual(expectedNums)
})
