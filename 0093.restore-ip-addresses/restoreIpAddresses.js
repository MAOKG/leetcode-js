/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const results = []
    findIp(s, [], results)
    return results
}

var findIp = function(remain, prev, results) {
    if (!remain) {
        if (prev.length === 4) {
            results.push(prev.join('.'))
        }
        return
    }

    if (prev.length > 3) {
        return
    }

    for (let i = 0; i < 3 && i < remain.length; i++) {
        let curr = remain.substring(0, i + 1)
        if (isValid(curr)) {
            findIp(remain.substring(i + 1), [...prev, curr], results)
        }
    }
}

var isValid = function(numStr) {
    if (!numStr) {
        return false
    }
    if (numStr[0] === '0' && numStr.length > 1) {
        return false
    }
    if (Number(numStr) > 255) {
        return false
    }
    return true
}

module.exports = restoreIpAddresses
// runtime 84%
// memory 22%
