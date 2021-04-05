const TreeNode = require('../utils/TreeNode')
const rightSideView = require('./rightSideView')

test('test case 1', () => {
    const node5 = new TreeNode(4)
    const node4 = new TreeNode(5)
    const node3 = new TreeNode(3, undefined, node5)
    const node2 = new TreeNode(2, undefined, node4)
    const node1 = new TreeNode(1, node2, node3)

    const output = rightSideView(node1)
    expect(output).toEqual([1, 3, 4])
})

test('test case 2', () => {
    const node2 = new TreeNode(3)
    const node1 = new TreeNode(1, undefined, node2)

    const output = rightSideView(node1)
    expect(output).toEqual([1, 3])
})

test('test case 3', () => {
    const output = rightSideView(null)
    expect(output).toEqual([])
})
