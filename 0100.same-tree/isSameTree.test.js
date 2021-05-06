const TreeNode = require('../utils/TreeNode')
const isSameTree = require('./isSameTree')

test('test case 1', () => {
    const a3 = new TreeNode(3)
    const a2 = new TreeNode(2)
    const a1 = new TreeNode(1, a2, a3)
    const b3 = new TreeNode(3)
    const b2 = new TreeNode(2)
    const b1 = new TreeNode(1, b2, b3)

    const result = isSameTree(a1, b1)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const a2 = new TreeNode(2)
    const a1 = new TreeNode(1, a2, null)
    const b2 = new TreeNode(2)
    const b1 = new TreeNode(1, null, b2)

    const result = isSameTree(a1, b1)
    expect(result).toBe(false)
})

test('test case 3', () => {
    const a3 = new TreeNode(1)
    const a2 = new TreeNode(2)
    const a1 = new TreeNode(1, a2, a3)
    const b3 = new TreeNode(2)
    const b2 = new TreeNode(1)
    const b1 = new TreeNode(1, b2, b3)

    const result = isSameTree(a1, b1)
    expect(result).toBe(false)
})
