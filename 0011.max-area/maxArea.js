/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let i = 0
    let j = height.length - 1

    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i)
        if (area > max) {
            max = area
        }
        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }

    return max
}

module.exports = maxArea
// runtime 56 ms, 88%
// memory 35 MB, 24%
