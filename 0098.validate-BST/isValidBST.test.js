const TreeNode = require('../utils/TreeNode')
const isValidBST = require('./isValidBST')

test('test case 1', () => {
    const n3 = new TreeNode(3)
    const n2 = new TreeNode(1)
    const n1 = new TreeNode(2, n2, n3)

    const result = isValidBST(n1)

    expect(result).toBe(true)
})

test('test case 2', () => {
    const n5 = new TreeNode(6)
    const n4 = new TreeNode(3)
    const n3 = new TreeNode(4, n4, n5)
    const n2 = new TreeNode(1)
    const n1 = new TreeNode(5, n2, n3)

    const result = isValidBST(n1)

    expect(result).toBe(false)
})

// [120,70,140,50,100,130,160,20,55,75,110,119,135,150,200]
test('test case 3', () => {
    const n15 = new TreeNode(200)
    const n14 = new TreeNode(150)
    const n13 = new TreeNode(135)
    const n12 = new TreeNode(119)
    const n11 = new TreeNode(110)
    const n10 = new TreeNode(75)
    const n9 = new TreeNode(55)
    const n8 = new TreeNode(20)
    const n7 = new TreeNode(160, n14, n15)
    const n6 = new TreeNode(130, n12, n13)
    const n5 = new TreeNode(100, n10, n11)
    const n4 = new TreeNode(50, n8, n9)
    const n3 = new TreeNode(140, n6, n7)
    const n2 = new TreeNode(70, n4, n5)
    const n1 = new TreeNode(120, n2, n3)

    const result = isValidBST(n1)

    expect(result).toBe(false)
})
