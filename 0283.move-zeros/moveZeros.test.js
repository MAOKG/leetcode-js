const moveZeros = require('./moveZeros')

test('test case 1', () => {
    const nums = [0, 1, 0, 3, 12]
    const result = moveZeros(nums)
    expect(nums).toEqual([1, 3, 12, 0, 0])
})

test('test case 2', () => {
    const nums = [0]
    const result = moveZeros(nums)
    expect(nums).toEqual([0])
})
