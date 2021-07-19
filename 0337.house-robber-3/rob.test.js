const rob = require('./rob')
const TreeNode = require('../utils/TreeNode')

test('test case 1', () => {
    const node5 = new TreeNode(1)
    const node4 = new TreeNode(3)
    const node3 = new TreeNode(3, null, node5)
    const node2 = new TreeNode(2, null, node4)
    const node1 = new TreeNode(3, node2, node3)
    const result = rob(node1)
    expect(result).toBe(7)
})

test('test case 2', () => {
    const node6 = new TreeNode(1)
    const node5 = new TreeNode(3)
    const node4 = new TreeNode(1)
    const node3 = new TreeNode(5, null, node6)
    const node2 = new TreeNode(4, node4, node5)
    const node1 = new TreeNode(3, node2, node3)
    const result = rob(node1)
    expect(result).toBe(9)
})
