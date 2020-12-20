[144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

Given the root of a binary tree, return the preorder traversal of its nodes' values.

## Examples

Example 1:

```
Input: root = [1,null,2,3]
Output: [1,2,3]
```

Example 2:

```
Input: root = []
Output: []
```

Example 3:

```
Input: root = [1]
Output: [1]
```

Example 4:

```
Input: root = [1,2]
Output: [1,2]
```

Example 5:

```
Input: root = [1,null,2]
Output: [1,2]
```

**Constraints**:

-   The number of nodes in the tree is in the range [0, 100].
-   -100 <= Node.val <= 100

**Follow up**:

Recursive solution is trivial, could you do it iteratively?

## Pseudocode

Recursive solution

```
PREORDER(node, arr)
  if node.val
    arr.push(node.val)
  if node.left
    PREORDER(node.left, arr)
  if node.right
    OREORDER(node.right, arr)
END

PREORDER-TRAVERSAL(root)
  arr = new Array()
  if root
    PREORDER(root, arr)
  return arr
END
```

Iterative solution

```
PREORDER-TRAVERSAL(root)
  arr = new Array()
  stack = new Stack()
  if !root
    return arr
  stack.push(root)
  while !stack.isEmpty()
    curr = stack.pop()
    arr.push(curr.val)
    if curr.right
      stack.push(curr.right)
    if curr.left
      stack.push(curr.left)
  return arr
END
```
