/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (s === p) {
        return true
    }

    const memo = new Array(s.length)
        .fill(0)
        .map((ele) => new Array(p.length).fill(null))

    return checkMatch(s, p, 0, 0, memo)
}

var checkMatch = function (s, p, i, j, memo) {
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
    if (p[j] === '*') {
        res =
            checkMatch(s, p, i, j + 1, memo) || checkMatch(s, p, i + 1, j, memo)
    } else if (p[j] === '?' || s[i] === p[j]) {
        res = checkMatch(s, p, i + 1, j + 1, memo)
    }
    memo[i][j] = res
    return res
}

var checkEnd = function (p, j) {
    for (let i = j; i < p.length; i++) {
        if (p[i] !== '*') {
            return false
        }
    }

    return true
}

module.exports = isMatch
// runtime 35%
// memory 66%
