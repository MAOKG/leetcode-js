const TreeNode = require('../utils/TreeNode')
const inorderTraversal = require('./inorderTraversal')
const inorderTraversalUsingStack = require('./inorderTraversalUsingStack')

test('test case 1', () => {
    const node3 = new TreeNode(3)
    const node2 = new TreeNode(2, node3)
    const node1 = new TreeNode(1, undefined, node2)

    const output1 = inorderTraversal(node1)
    const output2 = inorderTraversalUsingStack(node1)
    expect(output1).toEqual([1, 3, 2])
    expect(output2).toEqual([1, 3, 2])
})

test('test case 2', () => {
    const output1 = inorderTraversal(null)
    const output2 = inorderTraversalUsingStack(null)
    expect(output1).toEqual([])
    expect(output2).toEqual([])
})

test('test case 3', () => {
    const node1 = new TreeNode(1)

    const output1 = inorderTraversal(node1)
    const output2 = inorderTraversalUsingStack(node1)
    expect(output1).toEqual([1])
    expect(output2).toEqual([1])
})

test('test case 4', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1, node2)

    const output1 = inorderTraversal(node1)
    const output2 = inorderTraversalUsingStack(node1)
    expect(output1).toEqual([2, 1])
    expect(output2).toEqual([2, 1])
})

test('test case 5', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1, undefined, node2)

    const output1 = inorderTraversal(node1)
    const output2 = inorderTraversalUsingStack(node1)
    expect(output1).toEqual([1, 2])
    expect(output2).toEqual([1, 2])
})
