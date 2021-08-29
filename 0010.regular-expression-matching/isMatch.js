/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s === p) {
        return true
    }

    const memo = new Array(s.length)
        .fill(0)
        .map(ele => new Array(p.length).fill(null))

    return checkMatch(s, p, 0, 0, memo)
}

var checkMatch = function(s, p, i, j, memo) {
    if (i === s.length) {
        return checkEnd(p, j)
    }
    if (j === p.length) {
        return false
    }

    if (memo[i][j] !== null) {
        return memo[i][j]
    }

    let res = false

    if (j + 1 < p.length && p[j + 1] === '*') {
        // 0 times
        res = res || checkMatch(s, p, i, j + 2, memo)
        if (s[i] === p[j] || p[j] === '.') {
            // 1 or more times
            res = res || checkMatch(s, p, i + 1, j, memo)
        }
    } else if (s[i] === p[j] || p[j] === '.') {
        res = checkMatch(s, p, i + 1, j + 1, memo)
    }

    memo[i][j] = res
    return res
}

var checkEnd = function(p, j) {
    let i = j
    while (i < p.length) {
        if (i + 1 < p.length && p[i + 1] !== '*') {
            return false
        }
        i += 2
    }

    return i === p.length
}

module.exports = isMatch
// runtime 74%
// memory 70%
