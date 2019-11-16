/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const map = {}
    for (let i = 0; i < points.length; i++) {
        let p = points[i].toString()
        if (map[p]) {
            map[p]++
        } else {
            map[p] = 1
        }
    }
    let uniquePoints = Object.keys(map)
    if (uniquePoints.length <= 2) {
        return points.length
    }
    let max = 0
    for (let i = 0; i < uniquePoints.length; i++) {
        let a = uniquePoints[i].split(',').map(v => Number(v))
        for (let j = i + 1; j < uniquePoints.length; j++) {
            let b = uniquePoints[j].split(',').map(v => Number(v))
            let count = 0
            for (let k = 0; k < uniquePoints.length; k++) {
                let c = uniquePoints[k].split(',').map(v => Number(v))
                if (isSameLine(a, b, c)) {
                    count += map[uniquePoints[k]]
                }
            }
            if (count > max) {
                max = count
            }
        }
    }
    return max
}

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} b
 * @return {boolean}
 */
var isSameLine = function(a, b, c) {
    return (b[1] - a[1]) * (c[0] - b[0]) === (c[1] - b[1]) * (b[0] - a[0])
}

module.exports = maxPoints
