/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const map1 = {}
    let count = 0
    for (let ele of s) {
        if (map1[ele]) {
            map1[ele]++
        } else {
            map1[ele] = 1
        }
    }

    for (let ele of t) {
        if (map1[ele] > 0) {
            count++
            map1[ele]--
        } else {
            return false
        }
    }
    return count === s.length
}

module.exports = isAnagram
// runtime 60 ms 96%
// memory 38 MB 33%
