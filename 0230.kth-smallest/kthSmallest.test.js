const TreeNode = require('../utils/TreeNode')
const kthSmallest = require('./kthSmallest')

test('test case 1', () => {
    const n4 = new TreeNode(2)
    const n3 = new TreeNode(4)
    const n2 = new TreeNode(1, null, n4)
    const n1 = new TreeNode(3, n2, n3)

    const result = kthSmallest(n1, 1)
    expect(result).toBe(1)
})

test('test case 2', () => {
    const n6 = new TreeNode(1)
    const n5 = new TreeNode(4)
    const n4 = new TreeNode(2, n6)
    const n3 = new TreeNode(6)
    const n2 = new TreeNode(3, n4, n5)
    const n1 = new TreeNode(5, n2, n3)

    const result = kthSmallest(n1, 3)
    expect(result).toBe(3)
})
