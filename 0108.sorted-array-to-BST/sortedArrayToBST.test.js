const TreeNode = require('../utils/TreeNode')
const sortedArrayToBST = require('./sortedArrayToBST')

test('test case 1', () => {
    const nums = [-10, -3, 0, 5, 9]
    const n5 = new TreeNode(5)
    const n4 = new TreeNode(-10)
    const n3 = new TreeNode(9, n5)
    const n2 = new TreeNode(-3, n4)
    const n1 = new TreeNode(0, n2, n3)

    const result = sortedArrayToBST(nums)

    expect(result).toEqual(n1)
})

test('test case 2', () => {
    const nums = [1, 3]
    const n2 = new TreeNode(1)
    const n1 = new TreeNode(3, n2)

    const result = sortedArrayToBST(nums)

    expect(result).toEqual(n1)
})
