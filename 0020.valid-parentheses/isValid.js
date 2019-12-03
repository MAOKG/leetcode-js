/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else {
            if (stack.length === 0) {
                return false
            }
            let ele = stack.pop()
            if (map[ele] !== s[i]) {
                return false
            }
        }
    }

    return stack.length === 0
}
module.exports = isValid
// runtime 85%
// memory 63%
