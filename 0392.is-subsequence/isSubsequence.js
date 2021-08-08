/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.legnth > t.length) {
        return false
    }
    let i = 0
    let j = 0
    while (i < s.length) {
        if (j === t.length) {
            return false
        }
        if (s[i] === t[j]) {
            i++
            j++
        } else {
            j++
        }
    }

    return true
}

module.exports = isSubsequence
// runtime 12%
// memory 91%
