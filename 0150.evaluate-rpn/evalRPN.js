/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let nums = []
    for (let i = 0; i < tokens.length; i++) {
        let curr = tokens[i]
        if (isNaN(curr)) {
            let a = nums.pop()
            let b = nums.pop()
            let val
            if (curr === '+') {
                val = b + a
            } else if (curr === '-') {
                val = b - a
            } else if (curr === '*') {
                val = b * a
            } else {
                val = Math.trunc(b / a)
            }
            nums.push(val)
        } else {
            nums.push(Number(curr))
        }
    }
    return nums.pop()
}

module.exports = evalRPN
// runtime 84%
// memory 100%
