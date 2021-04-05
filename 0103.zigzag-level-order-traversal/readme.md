[103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

## Examples

Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
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
ZIG-ZAG-LEVEL-ORDER(root)
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
  for i in 0:len(result)-1
    if i is odd
      result[i].reverse()
  return result
END

TreeNodeWithLevel(node TreeNode, level int)
```
