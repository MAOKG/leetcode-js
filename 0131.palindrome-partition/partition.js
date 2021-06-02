/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const results = []
    getPartitions(s, [], results)
    return results
}

var getPartitions = function(s, prev, results) {
    if (!s) {
        results.push(prev)
        return
    }
    for (let i = 0; i < s.length; i++) {
        let sub = s.substring(0, i + 1)
        if (isPalindrome(sub)) {
            getPartitions(s.substring(i + 1), [...prev, sub], results)
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
// runtime 7.5%
// memory 5%
