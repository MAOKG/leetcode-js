const TreeNode = require('../utils/TreeNode')
const isSymmetric = require('./isSymmetric')

test('test case 1', () => {
    const a7 = new TreeNode(3)
    const a6 = new TreeNode(4)
    const a5 = new TreeNode(4)
    const a4 = new TreeNode(3)
    const a3 = new TreeNode(2, a6, a7)
    const a2 = new TreeNode(2, a4, a5)
    const a1 = new TreeNode(1, a2, a3)

    const result = isSymmetric(a1)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const a5 = new TreeNode(3)
    const a4 = new TreeNode(3)
    const a3 = new TreeNode(2, null, a5)
    const a2 = new TreeNode(2, null, a4)
    const a1 = new TreeNode(1, a2, a3)

    const result = isSymmetric(a1)
    expect(result).toBe(false)
})
