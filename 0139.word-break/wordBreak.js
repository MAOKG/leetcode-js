/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Array(s.length).fill(null)
    return checkWord(s, 0, wordDict, memo)
}

var checkWord = function(s, index, wordDict, memo) {
    if (index >= s.length) {
        return true
    }
    if (memo[index] !== null) {
        return memo[index]
    }
    for (let word of wordDict) {
        let n = word.length
        if (
            s.length - 1 - index >= n &&
            s.substring(index, index + n + 1) === word &&
            checkWord(s, index + n + 1, wordDict, memo)
        ) {
            memo[index] = true
            return true
        }
    }
    memo[index] = false
    return false
}

module.exports = wordBreak
