const TreeNode = require('../utils/TreeNode')
const levelOrderBottom = require('./levelOrderBottom')

test('test case 1', () => {
    const node5 = new TreeNode(7)
    const node4 = new TreeNode(15)
    const node3 = new TreeNode(20, node4, node5)
    const node2 = new TreeNode(9)
    const node1 = new TreeNode(3, node2, node3)

    const output = levelOrderBottom(node1)
    expect(output).toEqual([[15, 7], [9, 20], [3]])
})

test('test case 2', () => {
    const node1 = new TreeNode(1)

    const output = levelOrderBottom(node1)
    expect(output).toEqual([[1]])
})

test('test case 3', () => {
    const output = levelOrderBottom(null)
    expect(output).toEqual([])
})
