/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const rows = [[]]
    let currRow = 0
    let remain = maxWidth
    for (let word of words) {
        if (word.length > remain) {
            currRow++
            rows[currRow] = []
            remain = maxWidth
        }
        rows[currRow].push(word)
        remain = remain - (word.length + 1)
    }

    const res = rows.map((row, index) =>
        justify(row, maxWidth, index === rows.length - 1)
    )

    return res
}

var justify = function(row, maxWidth, isLast) {
    let res = ''
    if (isLast || row.length < 2) {
        res = row.join(' ')
    } else {
        const spaces = maxWidth - row.join('').length
        const spaceCount = Math.floor(spaces / (row.length - 1))
        let extraSpaceCount = spaces % (row.length - 1)
        for (let i = 0; i < row.length; i++) {
            res += row[i]
            if (i !== row.length - 1) {
                let count = spaceCount
                if (extraSpaceCount > 0) {
                    count++
                    extraSpaceCount--
                }
                res += ' '.repeat(count)
            }
        }
    }

    if (res.length < maxWidth) {
        res += ' '.repeat(maxWidth - res.length)
    }
    return res
}

module.exports = fullJustify
// runtime 98%
// memory 44%
