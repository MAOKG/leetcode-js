const fourSumCount = require('./fourSumCount')

test('test case 1', () => {
    var A = [1, 2]
    var B = [-2, -1]
    var C = [-1, 2]
    var D = [0, 2]

    expect(fourSumCount(A, B, C, D)).toBe(2)
})
