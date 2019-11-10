/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) {
        return ''
    }
    if (s.length === 1) {
        if (s === t) {
            return s
        }
        return ''
    }
    const tMap = {}
    let sMap = {}
    let count = 0
    for (let i = 0; i < t.length; i++) {
        addFreq(tMap, t[i])
    }
    let l = 0
    let r = 0
    let result = ''

    while (l <= r && r < s.length) {
        if (getValue(sMap, s[r]) < getValue(tMap, s[r])) {
            count++
        }
        addFreq(sMap, s[r])

        while (l <= r && getValue(sMap, s[l]) > getValue(tMap, s[l])) {
            sMap[s[l]]--
            l++
        }
        if (count === t.length) {
            result = getResult(result, s, l, r)
        }
        r++
    }
    return result
}
/**
 * @param {object} map
 * @param {string} key
 */
var addFreq = function(map, key) {
    if (isNaN(map[key])) {
        map[key] = 1
    } else {
        map[key]++
    }
}

/**
 * @param {object} map
 * @param {string} key
 * @return {number}
 */
var getValue = function(map, key) {
    if (isNaN(map[key])) {
        return 0
    }
    return map[key]
}

/**
 * @param {string} str
 * @param {number} left
 * @param {number} right
 * @return {string}
 */
var getSubStr = function(str, left, right) {
    return str.substring(left, right + 1)
}

/**
 * @param {string} result
 * @param {string} s
 * @param {number} l
 * @param {number} r
 * @return {string}
 */
var getResult = function(result, s, l, r) {
    if (result === '') {
        return getSubStr(s, l, r)
    } else if (r - l + 1 < result.length) {
        return getSubStr(s, l, r)
    }
    return result
}

module.exports = minWindow
// runtime 92ms 31%
// memory 37 MB 9%
