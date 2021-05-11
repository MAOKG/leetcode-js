const TreeNode = require('../utils/TreeNode')
const binaryTreePaths = require('./binaryTreePaths')

test('test case 1', () => {
    const n4 = new TreeNode(5)
    const n3 = new TreeNode(3)
    const n2 = new TreeNode(2, null, n4)
    const n1 = new TreeNode(1, n2, n3)

    const result = binaryTreePaths(n1)
    expect(result).toEqual(['1->2->5', '1->3'])
})

test('test case 2', () => {
    const n1 = new TreeNode(1)

    const result = binaryTreePaths(n1)
    expect(result).toEqual(['1'])
})
