const TreeNode = require('../utils/TreeNode')
const postorderTraversal = require('./postorderTraversal')
const postorderTraversalUsingStack = require('./postorderTraversalUsingStack')

test('test case 1', () => {
    const node3 = new TreeNode(3)
    const node2 = new TreeNode(2, node3)
    const node1 = new TreeNode(1, undefined, node2)

    const output1 = postorderTraversal(node1)
    const output2 = postorderTraversalUsingStack(node1)
    const expected = [3, 2, 1]
    expect(output1).toEqual(expected)
    expect(output2).toEqual(expected)
})

test('test case 2', () => {
    const output1 = postorderTraversal(null)
    const output2 = postorderTraversalUsingStack(null)
    const expected = []
    expect(output1).toEqual(expected)
    expect(output2).toEqual(expected)
})

test('test case 3', () => {
    const node1 = new TreeNode(1)

    const output1 = postorderTraversal(node1)
    const output2 = postorderTraversalUsingStack(node1)
    const expected = [1]
    expect(output1).toEqual(expected)
    expect(output2).toEqual(expected)
})

test('test case 4', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1, node2)

    const output1 = postorderTraversal(node1)
    const output2 = postorderTraversalUsingStack(node1)
    const expected = [2, 1]
    expect(output1).toEqual(expected)
    expect(output2).toEqual(expected)
})

test('test case 5', () => {
    const node2 = new TreeNode(2)
    const node1 = new TreeNode(1, undefined, node2)

    const output1 = postorderTraversal(node1)
    const output2 = postorderTraversalUsingStack(node1)
    const expected = [2, 1]
    expect(output1).toEqual(expected)
    expect(output2).toEqual(expected)
})
