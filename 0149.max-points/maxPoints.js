/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let max = 0
    for (let i = 0; i < points.length; i++) {
        let samePointsCount = 0
        let slopeMap = {}
        let localMax = 0
        for (let j = i; j < points.length; j++) {
            if (
                points[i][0] === points[j][0] &&
                points[i][1] === points[j][1]
            ) {
                samePointsCount++
            } else {
                let slope = getSlope(points[i], points[j])
                if (slopeMap[slope]) {
                    slopeMap[slope]++
                } else {
                    slopeMap[slope] = 1
                }
                if (slopeMap[slope] > localMax) {
                    localMax = slopeMap[slope]
                }
            }
        }
        localMax += samePointsCount
        if (localMax > max) {
            max = localMax
        }
    }
    return max
}

/**
 * @param {number[]} p
 * @param {number[]} q
 * @return {string}
 */
var getSlope = function(p, q) {
    let dy = q[1] - p[1]
    let dx = q[0] - p[0]
    if (dy === 0) {
        return '0/1'
    }
    if (dx === 0) {
        return '1/0'
    }
    let isNegative = (dy > 0 && dx < 0) || (dy < 0 && dx > 0)
    dy = Math.abs(dy)
    dx = Math.abs(dx)
    let gcd = getGCD(dx, dy)
    dy = dy / gcd
    dx = dx / gcd
    return `${isNegative ? '-' : ''}${dy}/${dx}`
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getGCD = function(a, b) {
    if (a === 0) {
        return b
    }
    return getGCD(b % a, a)
}

module.exports = maxPoints
// runtime 95%
// memory 100%
