[111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

## Examples:

Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: 2
```

Example 2:

```
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
```

**Constraints**:

-   The number of nodes in the tree is in the range [0, 10^5].
-   -1000 <= Node.val <= 1000

## Pseudocode

```
MIN-DEPTH(root)
  if !root
    return 0
  leftDepth = MIN-DEPTH(root.left)
  rightDepth = MIN-DEPTH(root.right)
  if root.left && root.right
    return min(leftDepth, rightDepth) + 1
  if root.left
    return leftDepth + 1
  if root.right
    return rightDepth + 1
  return 1
END
```