/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    let res = 0
    let i = 0
    let j = 0
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            i++
            j++
            res++
        } else {
            i++
        }
    }
    return res
}

module.exports = findContentChildren
// runtime 12%
// memory 96%
