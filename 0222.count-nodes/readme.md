[222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)

Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:

```
Input: root = [1,2,3,4,5,6]
Output: 6
```

Example 2:

```
Input: root = []
Output: 0
```

Example 3:

```
Input: root = [1]
Output: 1
```

**Constraints**:

-   The number of nodes in the tree is in the range [0, 5 * 10^4].
-   0 <= Node.val <= 5 \* 10^4
-   The tree is guaranteed to be complete.

Follow up: Traversing the tree to count the number of nodes in the tree is an easy solution but with O(n) complexity. Could you find a faster algorithm?

## Pseudocode

O(n)

```
COUNT-NODES(root)
  if !root
    return 0
  leftCount = COUNT-NODES(root.left)
  rightCount = COUNT-NODES(root.right)
  return 1 + leftCount + rightCount
END
```

O(lgn\*lgn)

```
COUNT-NODES(root)
  if !root
    return 0
  leftHeight = FIND-LEFT-HEIGHT(root)
  rightHeight = FIND-RIGHT-HEIGHT(root)

  if leftHeight = rightHeight
    reutrn Math.pow(leftHeight) - 1

  return 1 + COUNT-NODES(root.left) + COUNT-NODES(root.right)
END

FIND-LEFT-HEIGHT(root)
  curr = root
  level = 0
  while curr
    curr = curr.left
    level++
  return level
END

FIND-RIGHT-HEIGHT(root)
  curr = root
  level = 0
  while curr
    curr = curr.right
    level++
  return level
END
```
