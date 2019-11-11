/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const words = str.split(' ')
    if (pattern.length !== words.length) {
        return false
    }
    let map1 = {}
    let map2 = {}

    for (let i = 0; i < pattern.length; i++) {
        if (map1[pattern[i]] || map2[words[i]]) {
            if (
                map1[pattern[i]] !== words[i] ||
                map2[words[i]] !== pattern[i]
            ) {
                return false
            }
        } else {
            map1[pattern[i]] = words[i]
            map2[words[i]] = pattern[i]
        }
    }
    return true
}

module.exports = wordPattern
// runtime 56 ms 49%
// memory 33 MB 73%
