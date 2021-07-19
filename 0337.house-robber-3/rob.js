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
 * @return {number}
 */
var rob = function(root) {
    const map = new Map()
    let res = solve(root, map)
    return res
}

var solve = function(root, map) {
    if (!root) {
        return 0
    }
    if (map.has(root)) {
        return map.get(root)
    }
    let val1 = root.val
    let val2 = solve(root.left, map) + solve(root.right, map)
    if (root.left) {
        val1 += solve(root.left.left, map) + solve(root.left.right, map)
    }
    if (root.right) {
        val1 += solve(root.right.left, map) + solve(root.right.right, map)
    }
    let max = Math.max(val1, val2)
    map.set(root, max)

    return max
}

module.exports = rob
// runtime 99%
// memory 32%
