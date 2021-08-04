/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Array(s.length + 1).fill(false)
    memo[s.length] = true
    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {
            let n = word.length
            if (
                i + n <= s.length &&
                s.substring(i, i + n) == word &&
                memo[i + n]
            ) {
                memo[i] = true
                break
            }
        }
    }
    return memo[0]
}

module.exports = wordBreak
// runtime 58%
// memory 27%
