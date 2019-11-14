/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = []
    const map = {}

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]
            .split('')
            .sort()
            .join('')
        if (map.hasOwnProperty(str)) {
            result[map[str]].push(strs[i])
        } else {
            map[str] = result.length
            result.push([strs[i]])
        }
    }
    return result
}
module.exports = groupAnagrams
// runtime 70%
// memory 31%
