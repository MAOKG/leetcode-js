const TreeNode = require('../utils/TreeNode')
const levelOrder = require('./levelOrder')

test('test case 1', () => {
    const node5 = new TreeNode(7)
    const node4 = new TreeNode(15)
    const node3 = new TreeNode(20, node4, node5)
    const node2 = new TreeNode(9)
    const node1 = new TreeNode(3, node2, node3)

    const output = levelOrder(node1)
    expect(output).toEqual([[3], [9, 20], [15, 7]])
})

test('test case 2', () => {
    const node1 = new TreeNode(1)

    const output = levelOrder(node1)
    expect(output).toEqual([[1]])
})

test('test case 3', () => {
    const output = levelOrder(null)
    expect(output).toEqual([])
})
