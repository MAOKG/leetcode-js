const maxDepth = require('./maxDepth')
const TreeNode = require('../utils/TreeNode')

test('test case 1', () => {
    const node5 = new TreeNode(7)
    const node4 = new TreeNode(15)
    const node3 = new TreeNode(20, node4, node5)
    const node2 = new TreeNode(9)
    const node1 = new TreeNode(3, node2, node3)

    const output = maxDepth(node1)
    expect(output).toEqual(3)
})

test('test case 2', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1, null, node2)

    const output = maxDepth(node1)
    expect(output).toEqual(2)
})

test('test case 3', () => {
    const output = maxDepth(null)
    expect(output).toEqual(0)
})

test('test case 4', () => {
    const node1 = new TreeNode(0)

    const output = maxDepth(node1)
    expect(output).toEqual(1)
})
