const TreeNode = require('../utils/TreeNode')
const countNodes = require('./countNodes')
const countNodes2 = require('./countNodes2')

test('test case 1', () => {
    const n6 = new TreeNode(6)
    const n5 = new TreeNode(5)
    const n4 = new TreeNode(4)
    const n3 = new TreeNode(3, n6, null)
    const n2 = new TreeNode(2, n4, n5)
    const n1 = new TreeNode(1, n2, n3)

    const result = countNodes(n1)
    expect(result).toBe(6)

    const result2 = countNodes2(n1)
    expect(result2).toBe(6)
})

test('test case 2', () => {
    const result = countNodes(null)
    expect(result).toBe(0)

    const result2 = countNodes2(null)
    expect(result2).toBe(0)
})

test('test case 3', () => {
    const n1 = new TreeNode(1)

    const result = countNodes(n1)
    expect(result).toBe(1)

    const result2 = countNodes2(n1)
    expect(result2).toBe(1)
})
