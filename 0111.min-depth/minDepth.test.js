const minDepth = require('./minDepth')
const TreeNode = require('../utils/TreeNode')

test('test case 1', () => {
    const node5 = new TreeNode(7)
    const node4 = new TreeNode(15)
    const node3 = new TreeNode(20, node4, node5)
    const node2 = new TreeNode(9)
    const node1 = new TreeNode(3, node2, node3)

    const output = minDepth(node1)
    expect(output).toEqual(2)
})

test('test case 2', () => {
    const node5 = new TreeNode(6)
    const node4 = new TreeNode(5, null, node5)
    const node3 = new TreeNode(4, null, node4)
    const node2 = new TreeNode(3, null, node3)
    const node1 = new TreeNode(2, null, node2)

    const output = minDepth(node1)
    expect(output).toEqual(5)
})
