const TreeNode = require('../utils/TreeNode')
const isBalanced = require('./isBalanced')

test('test case 1', () => {
    const n5 = new TreeNode(7)
    const n4 = new TreeNode(15)
    const n3 = new TreeNode(20, n4, n5)
    const n2 = new TreeNode(9)
    const n1 = new TreeNode(3, n2, n3)

    const result = isBalanced(n1)
    expect(result).toBe(true)
})

test('test case 2', () => {
    const n7 = new TreeNode(4)
    const n6 = new TreeNode(4)
    const n5 = new TreeNode(3)
    const n4 = new TreeNode(3, n6, n7)
    const n3 = new TreeNode(2)
    const n2 = new TreeNode(2, n4, n5)
    const n1 = new TreeNode(1, n2, n3)

    const result = isBalanced(n1)
    expect(result).toBe(false)
})

test('test case 3', () => {
    const result = isBalanced(null)
    expect(result).toBe(true)
})
