const digitMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let results = []
    findComb(digits, 0, '', results)
    return results
}

var findComb = function(digits, index, prevStr, results) {
    if (digits.length === 0) {
        return
    }
    let letters = digitMap[digits[index]]
    for (let letter of letters) {
        let str = prevStr + letter
        if (index === digits.length - 1) {
            results.push(str)
        } else {
            findComb(digits, index + 1, str, results)
        }
    }
}

module.exports = letterCombinations
// runtime 70%
// memory 52%
