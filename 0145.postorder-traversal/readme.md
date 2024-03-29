[145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

Given the root of a binary tree, return the postorder traversal of its nodes' values.

## Examples

Example 1:

```
Input: root = [1,null,2,3]
Output: [3,2,1]
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
Output: [2,1]
```

**Constraints**:

-   The number of nodes in the tree is in the range [0, 100].
-   -100 <= Node.val <= 100

**Follow up**:

Recursive solution is trivial, could you do it iteratively?

## Pseudocode

Recursive solution

```
POSTORDER(node, arr)
  if node.left
    POSTORDER(node.left, arr)
  if node.right
    POSTORDER(node.right, arr)
  if node.val
    arr.push(node.val)
END

POSTORDER-TRAVERSAL(root)
  arr = new Array()
  if root
    POSTORDER(root, arr)
  return arr
END
```

Iterative solution

```
POSTORDER-TRAVERSAL(root)
  arr = new Array()
  stack = new Stack<Command>()
  if root
    stack.push(Command("visit", root))
    while !stack.isEmpty()
      curr = stack.pop()
      if curr.action is "push"
        arr.push(curr.node.val)
      else
        stack.push(Command("push", curr.node))
        if curr.node.right
          stack.push(Command("visit", curr.node.right))
        if curr.node.left
          stack.push(Command("visit", curr.node.left))
  return arr
END

Command(string action, TreeNode node)
```
