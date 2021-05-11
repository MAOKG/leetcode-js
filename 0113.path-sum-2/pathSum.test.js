const TreeNode = require('../utils/TreeNode')
const pathSum = require('./pathSum')

test('test case 1', () => {
    const n10 = new TreeNode(1)
    const n9 = new TreeNode(5)
    const n8 = new TreeNode(2)
    const n7 = new TreeNode(7)
    const n6 = new TreeNode(4, n9, n10)
    const n5 = new TreeNode(13)
    const n4 = new TreeNode(11, n7, n8)
    const n3 = new TreeNode(8, n5, n6)
    const n2 = new TreeNode(4, n4)
    const n1 = new TreeNode(5, n2, n3)

    const result = pathSum(n1, 22)
    expect(result).toEqual([
        [5, 4, 11, 2],
        [5, 8, 4, 5]
    ])
})

test('test case 2', () => {
    const n3 = new TreeNode(3)
    const n2 = new TreeNode(2)
    const n1 = new TreeNode(1, n2, n3)

    const result = pathSum(n1, 5)
    expect(result).toEqual([])
})

test('test case 3', () => {
    const n2 = new TreeNode(2)
    const n1 = new TreeNode(1, n2)

    const result = pathSum(n1, 0)
    expect(result).toEqual([])
})
