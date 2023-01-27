/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const anaMap = new Map()

    for (const s of strs) {
        const key = s.split('').sort().join('')
        if (anaMap.has(key)) {
            const arr = anaMap.get(key)
            arr.push(s)
        } else {
            anaMap.set(key, [s])
        }
    }

    return [...anaMap.values()]
}
module.exports = groupAnagrams
// runtime 94%
// memory 97%
