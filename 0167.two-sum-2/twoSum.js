/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1
    while (i < j) {
        let sum = numbers[i] + numbers[j]
        if (sum === target) {
            return [i + 1, j + 1]
        } else if (sum < target) {
            i++
        } else {
            j--
        }
    }
    throw Error('no solution!')
}

module.exports = twoSum

// runtime: 52ms, 91%
// memory: 35.4 MB, 17%
