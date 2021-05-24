const TreeNode = require('../utils/TreeNode')
const deleteNode = require('./deleteNode')

test('test case 1', () => {
    const n6 = new TreeNode(7)
    const n5 = new TreeNode(4)
    const n4 = new TreeNode(2)
    const n3 = new TreeNode(6, null, n6)
    const n2 = new TreeNode(3, n4, n5)
    const n1 = new TreeNode(5, n2, n3)

    const t5 = new TreeNode(7)
    const t4 = new TreeNode(2)
    const t3 = new TreeNode(6, null, t5)
    const t2 = new TreeNode(4, t4)
    const t1 = new TreeNode(5, t2, t3)

    const result = deleteNode(n1, 3)

    expect(result).toEqual(t1)
})

test('test case 2', () => {
    const n6 = new TreeNode(7)
    const n5 = new TreeNode(4)
    const n4 = new TreeNode(2)
    const n3 = new TreeNode(6, null, n6)
    const n2 = new TreeNode(3, n4, n5)
    const n1 = new TreeNode(5, n2, n3)

    const result = deleteNode(n1, 0)

    expect(result).toEqual(n1)
})

test('test case 3', () => {
    const result = deleteNode(null, 0)

    expect(result).toEqual(null)
})

test('test case 4', () => {
    const n6 = new TreeNode(7)
    const n5 = new TreeNode(4)
    const n4 = new TreeNode(2)
    const n3 = new TreeNode(6, null, n6)
    const n2 = new TreeNode(3, n4, n5)
    const n1 = new TreeNode(5, n2, n3)

    const t5 = new TreeNode(4)
    const t4 = new TreeNode(2)
    const t3 = new TreeNode(7)
    const t2 = new TreeNode(3, t4, t5)
    const t1 = new TreeNode(6, t2, t3)

    const result = deleteNode(n1, 5)

    expect(result).toEqual(t1)
})
