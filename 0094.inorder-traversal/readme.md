[94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

Given the root of a binary tree, return the inorder traversal of its nodes' values.

## Examples

Example 1:

```
Input: root = [1,null,2,3]
Output: [1,3,2]
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
Output: [2,1]
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
INORDER(node, arr)
  if node.left
    INORDER(node.left, arr)
  if node.val
    arr.push(node.val)
  if node.right
    INORDER(node.right, arr)
END

INORDER-TRAVERSAL(root)
  arr = new Array()
  if root
    INORDER(root, arr)
  return arr
END
```

Iterative solution

```
INORDER-TRAVERSAL(root)
  arr = new Array()
  stack = new Stack()
  if !root
    return arr
  stack.push(Command("visit", root))
  while !stack.isEmpty()
    curr = stack.pop()
    if curr.s is "push"
      arr.push(curr.root.val)
    else
      if curr.node.right
        stack.push(Command("visit", curr.node.right))
      stack.push(Command("push", curr.node))
      if curr.node.left
        stack.push(Command("visit", curr.node.left))
  return arr
END

Command(string s,TreeNode node)
```
