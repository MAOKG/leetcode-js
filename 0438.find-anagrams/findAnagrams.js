/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length < p.length) {
        return []
    }
    if (s.length === 1) {
        if (s === p) {
            return [0]
        }
        return []
    }
    const pMap = {}
    let sMap = {}
    const result = []
    for (let index = 0; index < p.length; index++) {
        addFrequency(pMap, p[index])
    }
    let i = 0
    let j = 0
    while (i <= j && j < s.length && i + p.length - 1 < s.length) {
        if ((sMap[s[j]] || 0) + 1 <= pMap[s[j]]) {
            addFrequency(sMap, s[j])
            if (j - i + 1 === p.length) {
                result.push(i)
                sMap[s[i]]--
                i++
            }
            j++
        } else {
            if (pMap[s[j]]) {
                sMap[s[i]]--
                i++
            } else {
                sMap = {}
                i = ++j
            }
        }
    }
    return result
}

/**
 * @param {object} map
 * @param {string} key
 */
var addFrequency = function(map, key) {
    if (isNaN(map[key])) {
        map[key] = 1
    } else {
        map[key]++
    }
}

module.exports = findAnagrams
// runtime 100ms 63%
// memory 37 MB 100%
