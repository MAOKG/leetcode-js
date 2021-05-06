const TreeNode = require('../utils/TreeNode')
const invertTree = require('./invertTree')

test('test case 1', () => {
    const testNode7 = new TreeNode(9)
    const testNode6 = new TreeNode(6)
    const testNode5 = new TreeNode(3)
    const testNode4 = new TreeNode(1)
    const testNode3 = new TreeNode(7, testNode6, testNode7)
    const testNode2 = new TreeNode(2, testNode4, testNode5)
    const testNode1 = new TreeNode(4, testNode2, testNode3)

    const result = invertTree(testNode1)

    const resultNode7 = new TreeNode(1)
    const resultNode6 = new TreeNode(3)
    const resultNode5 = new TreeNode(6)
    const resultNode4 = new TreeNode(9)
    const resultNode3 = new TreeNode(2, resultNode6, resultNode7)
    const resultNode2 = new TreeNode(7, resultNode4, resultNode5)
    const resultNode1 = new TreeNode(4, resultNode2, resultNode3)

    expect(result).toStrictEqual(resultNode1)
})

test('test case 2', () => {
    const testNode3 = new TreeNode(3)
    const testNode2 = new TreeNode(1)
    const testNode1 = new TreeNode(2, testNode2, testNode3)

    const result = invertTree(testNode1)

    const resultNode3 = new TreeNode(1)
    const resultNode2 = new TreeNode(3)
    const resultNode1 = new TreeNode(2, resultNode2, resultNode3)

    expect(result).toStrictEqual(resultNode1)
})

test('test case 3', () => {
    const result = invertTree(null)

    expect(result).toBe(null)
})
