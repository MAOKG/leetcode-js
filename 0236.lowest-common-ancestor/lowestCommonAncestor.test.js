const TreeNode = require('../utils/TreeNode')
const LCA = require('./lowestCommonAncestor')
const LCA2 = require('./lowestCommonAncestor2')

test('test case 1', () => {
    const n9 = new TreeNode(4)
    const n8 = new TreeNode(7)
    const n7 = new TreeNode(8)
    const n6 = new TreeNode(0)
    const n5 = new TreeNode(2, n8, n9)
    const n4 = new TreeNode(6)
    const n3 = new TreeNode(1, n6, n7)
    const n2 = new TreeNode(5, n4, n5)
    const n1 = new TreeNode(3, n2, n3)

    const result = LCA(n1, n2, n3)
    const result2 = LCA2(n1, n2, n3)

    expect(result).toEqual(n1)
    expect(result2).toEqual(n1)
})

test('test case 2', () => {
    const n9 = new TreeNode(4)
    const n8 = new TreeNode(7)
    const n7 = new TreeNode(8)
    const n6 = new TreeNode(0)
    const n5 = new TreeNode(2, n8, n9)
    const n4 = new TreeNode(6)
    const n3 = new TreeNode(1, n6, n7)
    const n2 = new TreeNode(5, n4, n5)
    const n1 = new TreeNode(3, n2, n3)

    const result = LCA(n1, n2, n9)
    const result2 = LCA2(n1, n2, n9)

    expect(result).toEqual(n2)
    expect(result2).toEqual(n2)
})

test('test case 3', () => {
    const n2 = new TreeNode(2)
    const n1 = new TreeNode(1, n2)

    const result = LCA(n1, n1, n2)
    const result2 = LCA2(n1, n1, n2)

    expect(result).toEqual(n1)
    expect(result2).toEqual(n1)
})
