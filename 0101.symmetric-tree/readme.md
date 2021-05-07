[101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

Example 2:

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

**Constraints**:

-   The number of nodes in the tree is in the range [1, 1000].
-   -100 <= Node.val <= 100

Follow up: Could you solve it both recursively and iteratively?

## Pseudocode

```
IS-SYMMETRIC(root)
  invertedLeft = INVERT-TREE(root.left)
  return IS-SAME-TREE(invertedLeft, root.right)
END

INVERT-TREE(root)
  if !root
    return null
  INVERT-TREE(root.left)
  INVERT-TREE(root.right)
  swap(root.left, root.right)
END

IS-SAME-TREE(a, b)
  if a && b
    if a.val != b.val
      return false
    isSameLeft = IS-SAME-TREE(a.left, b.left)
    isSameRight = IS-SAME-TREE(a.right, b.right)
    return isSameLeft && isSameRight
  if !a && !b
    return true
  return false
END
```
