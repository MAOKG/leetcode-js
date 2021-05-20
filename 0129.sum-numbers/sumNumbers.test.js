const TreeNode = require('../utils/TreeNode')
const sumNumbers = require('./sumNumbers')

test('test case 1', () => {
    const n3 = new TreeNode(3)
    const n2 = new TreeNode(2)
    const n1 = new TreeNode(1, n2, n3)
    const result = sumNumbers(n1)

    expect(result).toBe(25)
})

test('test case 2', () => {
    const n5 = new TreeNode(1)
    const n4 = new TreeNode(5)
    const n3 = new TreeNode(0)
    const n2 = new TreeNode(9, n4, n5)
    const n1 = new TreeNode(4, n2, n3)
    const result = sumNumbers(n1)

    expect(result).toBe(1026)
})
