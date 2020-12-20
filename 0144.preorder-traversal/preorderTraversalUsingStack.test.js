const TreeNode = require('../utils/TreeNode')
const preorderTraversal = require('./preorderTraversalUsingStack')

test('test case 1', () => {
    const node3 = new TreeNode(3)
    const node2 = new TreeNode(2, node3)
    const node1 = new TreeNode(1, undefined, node2)

    const output = preorderTraversal(node1)
    expect(output).toEqual([1, 2, 3])
})

test('test case 2', () => {
    const output = preorderTraversal(null)
    expect(output).toEqual([])
})

test('test case 3', () => {
    const node1 = new TreeNode(1)

    const output = preorderTraversal(node1)
    expect(output).toEqual([1])
})

test('test case 4', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1, node2)

    const output = preorderTraversal(node1)
    expect(output).toEqual([1, 2])
})

test('test case 5', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1, undefined, node2)

    const output = preorderTraversal(node1)
    expect(output).toEqual([1, 2])
})
