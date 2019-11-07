/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split('')
    let i = 0
    let j = arr.length - 1
    let vowelsObj = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }
    while (i < j) {
        if (
            vowelsObj[arr[i].toLowerCase()] &&
            vowelsObj[arr[j].toLowerCase()]
        ) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
            continue
        }
        if (vowelsObj[arr[i].toLowerCase()]) {
            j--
            continue
        }

        if (vowelsObj[arr[j].toLowerCase()]) {
            i++
            continue
        }
        i++
        j--
    }
    return arr.join('')
}

module.exports = reverseVowels

// runtime: 64ms, 93%
// memory: 41 MB, 78%
