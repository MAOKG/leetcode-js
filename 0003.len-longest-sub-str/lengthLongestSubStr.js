/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length
    }
    let i = 0
    let j = 1
    let max = 1
    let charMap = {}
    charMap[s[0]] = 0
    while (i < j && j < s.length) {
        if (charMap[s[j]] >= i) {
            i = charMap[s[j]] + 1
        } else {
            if (j - i + 1 > max) {
                max = j - i + 1
            }
        }
        charMap[s[j]] = j
        j++
    }

    return max
}

module.exports = lengthOfLongestSubstring

// runtime 96 ms, 64%
// memory 40 MB, 48%
