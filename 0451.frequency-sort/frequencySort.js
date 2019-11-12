/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = {}
    const list = []
    let result = ''
    for (let ele of s) {
        if (map[ele]) {
            map[ele]++
        } else {
            map[ele] = 1
        }
    }
    for (let key in map) {
        list.push({ char: key, freq: map[key] })
    }
    list.sort(function(a, b) {
        return b.freq - a.freq
    })

    for (let ele of list) {
        let count = ele.freq
        while (count > 0) {
            result = result.concat(ele.char)
            count--
        }
    }
    return result
}

module.exports = frequencySort
// runtime 64 ms 95%
// memory 44 MB 46%
