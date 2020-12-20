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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const arr = []
    const stack = []
    if (!root) {
        return arr
    }
    stack.push(root)
    while (stack.length > 0) {
        const curr = stack.pop()
        arr.push(curr.val)
        if (curr.right) {
            stack.push(curr.right)
        }
        if (curr.left) {
            stack.push(curr.left)
        }
    }

    return arr
}

module.exports = preorderTraversal
// runtime 92%
// memory 11%
