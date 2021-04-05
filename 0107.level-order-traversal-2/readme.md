[107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)

Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

## Examples

Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
```

Example 2:

```
Input: root = [1]
Output: [[1]]
```

Example 3:

```
Input: root = []
Output: []

```

**Constraints**:

-   The number of nodes in the tree is in the range [0, 2000].
-   -1000 <= Node.val <= 1000

## Pseudocode

```
LEVEL-ORDER-BOTTOM(root)
  if !root
    return []
  result = new Array()
  q = new Queue<TreeNodeWithLevel>()
  q.enqueue(new TreeNodeWithLevel(root, 0))
  while q is not empty
    curr = q.dequeue()
    if !result[curr.level]
      result[curr.level] = []
    result[curr.level].push(curr.node.val)
    if curr.node.left
      q.enqueue(new TreeNodeWithLevel(curr.node.left, curr.level+1))
    if curr.node.right
      q.enqueue(new TreeNodeWithLevel(curr.node.right, curr.level+1))
  return result.reverse()
END

TreeNodeWithLevel(node TreeNode, level int)
```
