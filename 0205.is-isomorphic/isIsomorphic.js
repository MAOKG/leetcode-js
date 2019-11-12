/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map1 = {}
    let map2 = {}

    for (let i = 0; i < s.length; i++) {
        if (map1[s[i]] || map2[t[i]]) {
            if (map1[s[i]] !== t[i] || map2[t[i]] !== s[i]) {
                return false
            }
        } else {
            map1[s[i]] = t[i]
            map2[t[i]] = s[i]
        }
    }
    return true
}

module.exports = isIsomorphic
// runtime 60ms 86%
// memory 36 MB 65%
