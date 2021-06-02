/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const results = []
    const map = {}
    getPartitions(s, [], results, map)
    return results
}

var getPartitions = function(s, prev, results, map) {
    if (!s) {
        results.push(prev)
        return
    }
    for (let i = 0; i < s.length; i++) {
        let sub = s.substring(0, i + 1)
        let isPalin = false
        if (map.hasOwnProperty(sub)) {
            isPalin = map[sub]
        } else {
            isPalin = isPalindrome(sub)
            map[sub] = isPalin
        }

        if (isPalin) {
            getPartitions(s.substring(i + 1), [...prev, sub], results, map)
        }
    }
}

var isPalindrome = function(s) {
    if (!s) {
        return false
    }
    if (s.length === 1) {
        return true
    }
    let i = 0
    let j = s.length - 1
    while (i < j) {
        if (s[i] != s[j]) {
            return false
        }
        i++
        j--
    }

    return true
}

module.exports = partition
// runtime 26%
// memory 32%
