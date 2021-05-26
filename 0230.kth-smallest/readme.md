[230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

Example 1:

```
Input: root = [3,1,4,null,2], k = 1
Output: 1
```

Example 2:

```
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```

**Constraints**:

-   The number of nodes in the tree is n.
-   1 <= k <= n <= 10^4
-   0 <= Node.val <= 10^4

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

## Pseudocode

Inorder Traversal

```
KTH-SMALLEST(root, k)
  if !root
    return null
  count = 0
  stack = new Stack<Command>()
  stack.push(new Command('visit', root))
  while stack is not empty
    curr = stack.pop()
    if curr.s is 'add'
      count++
      if count is k
        return curr.node.val
    else
      if curr.node.right
        stack.push(new Command('visit', curr.node.right))
      stack.push(new Command('add', curr.node))
      if curr.node.left
        stack.push(new Command('visit', curr.node.left))
END

Command(string s, TreeNode node)
```
