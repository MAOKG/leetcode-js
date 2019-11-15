/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let result = 0
    for (let i = 0; i < points.length; i++) {
        let map = {}
        for (let j = 0; j < points.length; j++) {
            if (i == j) {
                continue
            }
            let d = distanceSquare(points[i], points[j])
            if (map.hasOwnProperty(d)) {
                map[d]++
            } else {
                map[d] = 1
            }
        }
        for (let key in map) {
            if (map[key] >= 2) {
                result += map[key] * (map[key] - 1)
            }
        }
    }
    return result
}

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var distanceSquare = function(a, b) {
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
}

module.exports = numberOfBoomerangs
// runtime 34%
// memory 50%
