const minSubArrayLen = require('./minSubArrayLen')

test('test case 1', () => {
    var s = 7
    var nums = [2, 3, 1, 2, 4, 3]

    var result = minSubArrayLen(s, nums)
    expect(result).toBe(2)
})
