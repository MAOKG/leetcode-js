/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const arr = s.split(' ')
    if (pattern.length != arr.length) {
        return false
    }
    const map1 = new Map()
    const map2 = new Map()
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let p = pattern[i]
        if (!map1.has(p) && !map2.has(word)) {
            map1.set(p, word)
            map2.set(word, p)
        } else if (map1.get(p) !== word || map2.get(word) !== p) {
            return false
        }
    }

    return true
}

module.exports = wordPattern
// runtime 98%
// memory 78%
