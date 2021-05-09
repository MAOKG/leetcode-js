[110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

## Examples

Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

Example 2:

```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

Example 3:

```
Input: root = []
Output: true
```

**Constraints**:

-   The number of nodes in the tree is in the range [0, 5000].
-   -10^4 <= Node.val <= 10^4

## Pseudocode

```
IS-BALANCED(root)
  if !root
    return true
  leftHeight = FIND-HEIGHT(root.left)
  rightHeight = FIND-HEIGHT(root.right)
  if leftHeight and rightHeight differ more than 1
    return false
  return IS-BALANCED(root.left) && IS-BALANCED(root.right)
END

FIND-HEIGHT(node)
  if !node
    return 0
  leftHeight = FIND-HEIGHT(node.left)
  rightHeight = FIND-HEIGHT(node.right)

  return max(leftHeight, rightHeight) + 1
END
```
