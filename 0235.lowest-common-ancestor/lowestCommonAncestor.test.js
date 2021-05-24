const TreeNode = require('../utils/TreeNode')
const lowestCommonAncestor = require('./lowestCommonAncestor')

test('test case 1', () => {
    const n9 = new TreeNode(5)
    const n8 = new TreeNode(3)
    const n7 = new TreeNode(9)
    const n6 = new TreeNode(7)
    const n5 = new TreeNode(4, n8, n9)
    const n4 = new TreeNode(0)
    const n3 = new TreeNode(8, n6, n7)
    const n2 = new TreeNode(2, n4, n5)
    const n1 = new TreeNode(6, n2, n3)

    const result = lowestCommonAncestor(n1, n2, n5)
    expect(result).toEqual(n2)
})

test('test case 2', () => {
    const n2 = new TreeNode(1)
    const n1 = new TreeNode(2, n2)

    const result = lowestCommonAncestor(n1, n1, n2)
    expect(result).toEqual(n1)
})
