/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0
    let j = s.length - 1

    while (i < j) {
        if (isEqual(s[i], s[j])) {
            i++
            j--
            continue
        }
        if (!isValid(s[i])) {
            i++
            continue
        }
        if (!isValid(s[j])) {
            j--
            continue
        }
        return false
    }

    return true
}

/**
 * @param {string} c
 * @return {boolean}
 */
var isValid = function(c) {
    return /^[a-zA-Z0-9]$/.test(c)
}

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var isEqual = function(a, b) {
    return a.toLowerCase() === b.toLowerCase()
}

module.exports = isPalindrome
// runtime: 64ms, 91%
// memory: 39.5 MB, 30%
