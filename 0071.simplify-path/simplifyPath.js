/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (path[path.length - 1] !== '/') {
        path += '/'
    }
    let stack = []
    let curr = ''
    for (let i = 0; i < path.length; i++) {
        if (path[i] === '/') {
            if (curr) {
                if (curr === '.') {
                } else if (curr === '..') {
                    stack.pop()
                } else {
                    stack.push(curr)
                }
                curr = ''
            }
        } else {
            curr += path[i]
        }
    }
    return `/${stack.join('/')}`
}
module.exports = simplifyPath
// runtime 88%
// memory 33%
