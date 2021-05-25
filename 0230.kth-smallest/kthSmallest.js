/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (!root) {
        return null
    }
    let count = 0
    const stack = []
    stack.push(new Command('visit', root))
    while (stack.length > 0) {
        let curr = stack.pop()
        if (curr.s === 'add') {
            count++
            if (count === k) {
                return curr.node.val
            }
        } else {
            if (curr.node.right) {
                stack.push(new Command('visit', curr.node.right))
            }
            stack.push(new Command('add', curr.node))
            if (curr.node.left) {
                stack.push(new Command('visit', curr.node.left))
            }
        }
    }
}

class Command {
    constructor(s, node) {
        this.s = s
        this.node = node
    }
}

module.exports = kthSmallest
// runtime 88%
// memory 48%
