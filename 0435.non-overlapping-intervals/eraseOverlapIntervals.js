/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length < 2) {
        return 0
    }
    intervals.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    let count = 1
    let prev = intervals[0][1]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= prev) {
            count++
            prev = intervals[i][1]
        }
    }

    return intervals.length - count
}

module.exports = eraseOverlapIntervals
// runtime 6%
// memory 6%
