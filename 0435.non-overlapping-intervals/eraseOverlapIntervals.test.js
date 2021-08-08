const eraseOverlapIntervals = require('./eraseOverlapIntervals')

test('test case 1', () => {
    const intervals = [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3]
    ]
    const output = 1
    const result = eraseOverlapIntervals(intervals)
    expect(result).toBe(output)
})

test('test case 2', () => {
    const intervals = [
        [1, 2],
        [1, 2],
        [1, 2]
    ]
    const output = 2
    const result = eraseOverlapIntervals(intervals)
    expect(result).toBe(output)
})

test('test case 3', () => {
    const intervals = [
        [1, 2],
        [2, 3]
    ]
    const output = 0
    const result = eraseOverlapIntervals(intervals)
    expect(result).toBe(output)
})

test('test case 4', () => {
    const intervals = [
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12]
    ]
    const output = 2
    const result = eraseOverlapIntervals(intervals)
    expect(result).toBe(output)
})
