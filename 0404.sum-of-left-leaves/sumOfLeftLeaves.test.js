const TreeNode = require('../utils/TreeNode')
const sumOfLeftLeaves = require('./sumOfLeftLeaves')

test('test case 1', () => {
    const n5 = new TreeNode(7)
    const n4 = new TreeNode(15)
    const n3 = new TreeNode(20, n4, n5)
    const n2 = new TreeNode(9)
    const n1 = new TreeNode(3, n2, n3)

    const result = sumOfLeftLeaves(n1)
    expect(result).toBe(24)
})

test('test case 2', () => {
    const n1 = new TreeNode(1)

    const result = sumOfLeftLeaves(n1)
    expect(result).toBe(0)
})
