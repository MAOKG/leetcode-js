[102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## Examples

Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
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
LEVEL-ORDER(root)
  result = new Array()
  if !root
    return result
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
  return result
END

TreeNodeWithLevel(node TreeNode, level int)
```
